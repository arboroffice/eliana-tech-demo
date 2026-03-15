import { 
  collection, 
  addDoc, 
  getDocs, 
  getDoc, 
  doc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy, 
  limit, 
  Timestamp,
  serverTimestamp 
} from 'firebase/firestore'
import { db } from './firebase'

// --- Interfaces based on PRD v4.0 ---

export interface ELianaMission {
  id?: string
  title: string
  description: string
  status: 'draft' | 'planning' | 'executing' | 'completed' | 'failed'
  targetKpis: Record<string, any>
  assignedPmAgentId?: string
  clientId: string
  createdAt: any
  updatedAt: any
}

export interface ElianaAgent {
  id?: string
  name: string
  type: 'ProjectManager' | 'LearningAgent' | 'MetaBuilder' | 'BrowserAutomator' | 'LeadQualifier' | 'ContentWriter'
  status: 'active' | 'training' | 'idle' | 'error'
  proficiencyLevel: number // 0-100
  modelConfig: Record<string, any>
  skillIds: string[]
  credentialsId?: string
  createdAt: any
  updatedAt: any
}

export interface AgentLog {
  id?: string
  agentId: string
  missionId?: string
  level: 'INFO' | 'SCAN' | 'PLAN' | 'EXEC' | 'SEC' | 'META' | 'ERROR'
  message: string
  timestamp: any
}

export interface ElianaStrategy {
  id?: string
  name: string
  description: string
  type: 'workflow_optimization' | 'prompt_engineering' | 'tool_selection'
  content: any
  effectivenessMetrics: Record<string, any>
  createdByAgentId: string
  createdAt: any
}

// --- Service Functions ---

export const osService = {
  // Missions
  async createMission(mission: Omit<ELianaMission, 'id' | 'createdAt' | 'updatedAt'>) {
    const docRef = await addDoc(collection(db, 'os_missions'), {
      ...mission,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    })
    return docRef.id
  },

  async getMissions(clientId: string) {
    const q = query(
      collection(db, 'os_missions'), 
      where('clientId', '==', clientId),
      orderBy('createdAt', 'desc')
    )
    const snapshot = await getDocs(q)
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as ELianaMission))
  },

  // Agents
  async createAgent(agent: Omit<ElianaAgent, 'id' | 'createdAt' | 'updatedAt'>) {
    const docRef = await addDoc(collection(db, 'os_agents'), {
      ...agent,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp()
    })
    return docRef.id
  },

  async getAgents() {
    const snapshot = await getDocs(collection(db, 'os_agents'))
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as ElianaAgent))
  },

  async updateAgentProficiency(agentId: string, level: number) {
    const docRef = doc(db, 'os_agents', agentId)
    await updateDoc(docRef, { 
      proficiencyLevel: level,
      updatedAt: serverTimestamp()
    })
  },

  // Logs / Feed
  async logAgentActivity(log: Omit<AgentLog, 'id' | 'timestamp'>) {
    await addDoc(collection(db, 'os_agent_logs'), {
      ...log,
      timestamp: serverTimestamp()
    })
  },

  async getRecentLogs(limitCount: number = 50) {
    const q = query(
      collection(db, 'os_agent_logs'),
      orderBy('timestamp', 'desc'),
      limit(limitCount)
    )
    const snapshot = await getDocs(q)
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as AgentLog))
  },

  // Strategies
  async saveStrategy(strategy: Omit<ElianaStrategy, 'id' | 'createdAt'>) {
    const docRef = await addDoc(collection(db, 'os_strategies'), {
      ...strategy,
      createdAt: serverTimestamp()
    })
    return docRef.id
  },

  // Recipes / Skill Graduation
  async graduateSkill(recipeId: string, stability: number) {
    // Logic for graduating an agent from Shadow Mode to Full Autonomy
    const docRef = doc(db, 'os_recipes', recipeId)
    await updateDoc(docRef, {
      status: stability > 90 ? 'fully_autonomous' : 'human_in_the_loop',
      stabilityLevel: stability,
      graduatedAt: stability > 90 ? serverTimestamp() : null
    })
  }
}
