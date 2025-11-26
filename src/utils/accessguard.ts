// AccessGuard simulation utility
export interface AccessGuardContext {
  user: {
    username: string
    roles: string[]
  }
  decision: {
    decision: string
    riskScore: number
  }
  readonly: boolean
}

// Mock AccessGuard headers - simulating what would come from the proxy
const MOCK_HEADERS = {
  "x-accessguard-user": {
    username: "John Doe",
    roles: ["employee"],
  },
  "x-accessguard-decision": {
    decision: "allow",
    riskScore: 0.3,
  },
  "x-readonly-session": "false", // "true" or "false"
}

export function getAccessGuardContext(): AccessGuardContext {
  // In a real scenario, these would come from request headers
  // For now, we're simulating the behavior
  const readonlySession = MOCK_HEADERS["x-readonly-session"] === "true"

  return {
    user: MOCK_HEADERS["x-accessguard-user"],
    decision: MOCK_HEADERS["x-accessguard-decision"],
    readonly: readonlySession,
  }
}

export function isProtected(): boolean {
  // Check if the AccessGuard headers are present
  // In a real app, this would check actual request headers
  return true
}
