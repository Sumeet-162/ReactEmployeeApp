const employees = [
  {
    "id": 1,
    "firstName": "Aarav",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Prepare Q1 financial report",
        "description": "Analyze and summarize the financial data for Q1.",
        "date": "2024-11-25",
        "category": "Finance"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Team meeting notes",
        "description": "Document the minutes of the team meeting held on 2024-11-20.",
        "date": "2024-11-20",
        "category": "Meetings"
      }
    ],
    "taskNumbers": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 2,
    "firstName": "Ishita",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Onboarding new hires",
        "description": "Complete the onboarding process for three new employees.",
        "date": "2024-11-30",
        "category": "HR"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Holiday schedule planning",
        "description": "Plan and draft the holiday schedule for December.",
        "date": "2024-11-18",
        "category": "HR"
      }
    ],
    "taskNumbers": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 3,
    "firstName": "Rohan",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Backend API development",
        "description": "Develop and test the REST API for the ongoing project.",
        "date": "2024-11-28",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Code review for module X",
        "description": "Review the implementation of module X for errors.",
        "date": "2024-11-20",
        "category": "Code Review"
      }
    ],
    "taskNumbers": {
      "active": 1,
      "newTask": 0,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 4,
    "firstName": "Ashish",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Marketing strategy draft",
        "description": "Prepare a draft for the new marketing strategy.",
        "date": "2024-11-29",
        "category": "Marketing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Winter campaign flyer",
        "description": "Design a flyer for the winter marketing campaign.",
        "date": "2024-11-10",
        "category": "Design"
      }
    ],
    "taskNumbers": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 5,
    "firstName": "Manasa",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Database query optimization",
        "description": "Optimize database queries to improve performance.",
        "date": "2024-11-26",
        "category": "Database"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Fix bug in production",
        "description": "Resolve the critical bug affecting the production environment.",
        "date": "2024-11-24",
        "category": "Support"
      }
    ],
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 0,
      "failed": 0
    }
  }
];

const admin = [{
  "id": 1,
  "email": "admin@example.com",
  "password": "123"
}
];

export const setLocalStorage = ()=>{
  localStorage.setItem('employees',JSON.stringify(employees))
  localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = ()=>{
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))

  return {employees,admin}
}