# @riotprompt/riotplan-history

History management for RiotPlan. Track revisions and milestones for plans.

## Installation

```bash
npm install @riotprompt/riotplan-history
```

## Usage

```typescript
import {
    loadHistory,
    createRevision,
    createMilestone,
    rollbackToMilestone,
} from "@riotprompt/riotplan-history";

// Load or initialize history
const manager = await loadHistory("./my-plan");

// Create revisions
createRevision(manager.history, "Added new feature");
createRevision(manager.history, "Bug fixes", { author: "Jane" });

// Create milestones
createMilestone(manager.history, "v1.0", "First release");

// Rollback to milestone
const result = rollbackToMilestone(manager.history, "v1.0");

// Save changes
await manager.save();
```

## Features

- **Revisions**: Track every change with version numbers and messages
- **Milestones**: Mark significant points for easy rollback
- **Persistence**: Save history to `.history/HISTORY.json`

## License

MIT

