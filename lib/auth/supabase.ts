import { createClient } from '@supabase/supabase-js'
import { createBrowserClient } from '@supabase/ssr'
import { isDemoMode, mockApi } from '../db/mock'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Only create Supabase client if not in demo mode
export const supabase = isDemoMode() 
  ? null 
  : createClient(supabaseUrl, supabaseAnonKey)

export function createSupabaseClient() {
  if (isDemoMode()) return null
  return createBrowserClient(supabaseUrl, supabaseAnonKey)
}

export async function getUser() {
  if (isDemoMode()) {
    // Return demo user in demo mode
    return {
      id: 'demo-user-1',
      email: 'demo@lilbet-partners.com',
      user_metadata: {
        name: 'Demo Partner'
      }
    }
  }

  if (!supabase) return null
  
  try {
    const { data: { user } } = await supabase.auth.getUser()
    return user
  } catch (error) {
    console.warn('Supabase auth failed:', error)
    return null
  }
}

export async function signOut() {
  if (isDemoMode()) {
    return { error: null }
  }

  if (!supabase) return { error: new Error('Supabase not available') }
  
  const { error } = await supabase.auth.signOut()
  return { error }
}

export async function signInWithEmail(email: string, password: string) {
  if (isDemoMode()) {
    try {
      const result = await mockApi.signIn(email, password)
      return { data: result, error: null }
    } catch (error) {
      return { data: null, error }
    }
  }

  if (!supabase) return { data: null, error: new Error('Supabase not available') }
  
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })
  return { data, error }
}

export async function signUpWithEmail(email: string, password: string, userData?: any) {
  if (isDemoMode()) {
    try {
      const result = await mockApi.signUp({ email, password, ...userData })
      return { data: result, error: null }
    } catch (error) {
      return { data: null, error }
    }
  }

  if (!supabase) return { data: null, error: new Error('Supabase not available') }
  
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: userData ? { data: userData } : undefined
  })
  return { data, error }
}