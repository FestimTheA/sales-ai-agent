export const data = {
  steps: {
    step_1: { id: "step_1", label: "Sourced" },
    step_2: { id: "step_2", label: "Outreached" },
    step_3: { id: "step_3", label: "Accepted" },
    step_4: { id: "step_4", label: "Responded" }
  },
  campaigns: {
    "campaign_1": { id: "campaign_1", name: "Campaign 1" },
    "campaign_2": { id: "campaign_2", name: "Campaign 2" }
  },
  users: {
    "user_1": {
      id: "user_1",
      name: "Festim",
    },
    "user_2": {
      id: "user_2",
      name: "Agon",
    }
  },
  metrics: {
    "campaign_1": {
      "user_1": {
        "step_1": { value: 750, timestamp: "2024-03-01" },
        "step_2": { value: 600, timestamp: "2024-03-15" }, 
        "step_3": { value: 150, timestamp: "2024-03-18" },
        "step_4": { value: 50, timestamp: "2024-03-20" }  
      },
      "user_2": {
        "step_1": { value: 600, timestamp: "2024-03-01" },
        "step_2": { value: 500, timestamp: "2024-03-15" },
        "step_3": { value: 100, timestamp: "2024-03-18" },
        "step_4": { value: 25, timestamp: "2024-03-20" }
      }
    },
    "campaign_2": {
      "user_1": {
        "step_1": { value: 175, timestamp: "2024-03-01" },
        "step_2": { value: 75, timestamp: "2024-03-15" }, 
        "step_3": { value: 10, timestamp: "2024-03-18" },
        "step_4": { value: 5, timestamp: "2024-03-20" }  
      },
      "user_2": {
        "step_1": { value: 150, timestamp: "2024-03-01" },
        "step_2": { value: 100, timestamp: "2024-03-15" },
        "step_3": { value: 20, timestamp: "2024-03-18" },
        "step_4": { value: 10, timestamp: "2024-03-20" }
      }
    }
  }
}