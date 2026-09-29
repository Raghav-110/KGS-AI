const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || ''
const API_KEY = import.meta.env.VITE_API_KEY || ''

async function request(path, options = {}) {
  if (!API_BASE_URL) return null

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(API_KEY ? { Authorization: `Bearer ${API_KEY}` } : {}),
      ...(options.headers || {}),
    },
  })

  if (!response.ok) {
    throw new Error(`API request failed: ${response.status}`)
  }

  return response.json()
}

export const api = {
  async getStudentProfile() {
    try {
      const data = await request('/student-profile')
      if (data) return data
    } catch (error) {
      console.warn('Falling back to localStorage for student profile:', error)
    }

    return JSON.parse(localStorage.getItem('studentProfile') || 'null')
  },

  async saveStudentProfile(profile) {
    try {
      if (API_BASE_URL) {
        await request('/student-profile', {
          method: 'POST',
          body: JSON.stringify(profile),
        })
      }
    } catch (error) {
      console.warn('API save failed; falling back to localStorage:', error)
    }

    localStorage.setItem('studentProfile', JSON.stringify(profile))
    return profile
  },

  async getRoadmap() {
    try {
      const data = await request('/roadmap')
      if (data) return data
    } catch (error) {
      console.warn('Falling back to localStorage for roadmap:', error)
    }

    return JSON.parse(localStorage.getItem('roadmap') || 'null')
  },

  async saveProgress(progress) {
    try {
      if (API_BASE_URL) {
        await request('/progress', {
          method: 'POST',
          body: JSON.stringify(progress),
        })
      }
    } catch (error) {
      console.warn('API progress save failed; falling back to localStorage:', error)
    }

    localStorage.setItem('learningProgress', JSON.stringify(progress))
    return progress
  },
}
