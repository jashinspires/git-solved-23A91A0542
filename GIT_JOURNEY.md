# My Git Mastery Challenge Journey

## Student Information
- Name: jashinspires
- Student ID: 23A91A0542
- Repository: https://github.com/jashinspires/git-solved-23A91A0542
- Date Started: 2025-10-31
- Date Completed: 2025-10-31

## Task Summary
Cloned the instructor's DevOps Simulator repository, resolved two rounds of intentional merge conflicts, and executed a full suite of Git workflows (merge, rebase, stash, cherry-pick, reset, revert, tag, etc.) before pushing the consolidated solution to my public repository.

## Commands Used

| Command | Times Used | Purpose |
|---------|------------|---------|
| git clone | 1 | Clone instructor repository |
| git checkout | 20+ | Switch branches and create feature branches |
| git branch | 10 | Verify available branches |
| git merge | 2 | Merge `dev` and `conflict-simulator` into `main` |
| git add | 35+ | Stage resolved files and updates |
| git commit | 18 | Record resolutions and feature work |
| git push | 15 | Publish updates to personal GitHub repo |
| git fetch | 3 | Retrieve instructor updates |
| git pull | 1 | Confirm instructor main up to date |
| git stash | 2 | Shelve/un-shelve WIP feature code |
| git cherry-pick | 3 | Promote branch commits and recover via reflog |
| git rebase | 1 | Replay feature branch onto main |
| git reset | 3 | Practice soft/mixed/hard resets |
| git revert | 1 | Demonstrate safe undo of a bad commit |
| git tag | 2 | Mark release milestones |
| git status | 40+ | Inspect repository state |
| git log | 25+ | Review history and create artifacts |
| git diff | 15 | Inspect branch differences |
| git reflog | 1 | Recover commit after hard reset |

## Conflicts Resolved

### Merge 1: main + dev (6 files)

#### Conflict 1: `config/app-config.yaml`
- **Issue**: Separate production vs development configuration blocks.
- **Resolution**: Created unified configuration with production defaults and toggleable development profile.
- **Strategy**: Preserve production reliability while gating dev settings behind `development.enabled` flag.
- **Difficulty**: Medium
- **Time**: 15 minutes

#### Conflict 2: `config/database-config.json`
- **Issue**: Production and development JSON structures diverged.
- **Resolution**: Re-modeled the JSON into `production` and `development` sections with profile-specific settings.
- **Strategy**: Group settings per environment to keep both datasets intact.
- **Difficulty**: Medium
- **Time**: 10 minutes

#### Conflict 3: `scripts/deploy.sh`
- **Issue**: Production script vs development docker-compose workflow.
- **Resolution**: Added environment switch with conditional logic for production and development flows.
- **Strategy**: Parameterize the script via `DEPLOY_ENV` and share pre-checks.
- **Difficulty**: Hard
- **Time**: 20 minutes

#### Conflict 4: `scripts/monitor.js`
- **Issue**: Production basic monitor vs verbose development monitor.
- **Resolution**: Implemented environment-aware configuration object selecting prod/dev behaviors.
- **Strategy**: Determine behavior based on `NODE_ENV` with shared health check routine.
- **Difficulty**: Medium
- **Time**: 15 minutes

#### Conflict 5: `docs/architecture.md`
- **Issue**: Production-only architecture vs development-focused document.
- **Resolution**: Merged content to describe both environments side-by-side.
- **Strategy**: Create sections for production, development, and security considerations.
- **Difficulty**: Easy
- **Time**: 10 minutes

#### Conflict 6: `README.md`
- **Issue**: Production baseline vs development feature roadmap.
- **Resolution**: Combined key information with student metadata and environment-specific instructions.
- **Strategy**: Present production and development statuses together with consolidated feature list.
- **Difficulty**: Easy
- **Time**: 10 minutes

### Merge 2: main + conflict-simulator (6 files)

#### Conflict 1: `config/app-config.yaml`
- **Issue**: Existing production/dev config vs experimental AI-driven profile.
- **Resolution**: Added `experimental` environment while keeping production defaults first.
- **Strategy**: Wrap experimental settings in separate block disabled by default.
- **Difficulty**: Medium
- **Time**: 15 minutes

#### Conflict 2: `config/database-config.json`
- **Issue**: Prior multi-profile JSON vs distributed experimental cluster config.
- **Resolution**: Introduced new `experimental` section containing distributed cluster parameters and AI optimization flags.
- **Strategy**: Maintain original profiles and append experimental settings behind `enabled` guard.
- **Difficulty**: Medium
- **Time**: 12 minutes

#### Conflict 3: `scripts/deploy.sh`
- **Issue**: Dual-mode deploy script vs AI/ML experimental deployment pipeline.
- **Resolution**: Expanded script to support production, development, and experimental cases via `case` statement.
- **Strategy**: Gate advanced steps (AI analysis, canary rollout, multi-cloud loop) to `experimental` mode only.
- **Difficulty**: Hard
- **Time**: 20 minutes

#### Conflict 4: `scripts/monitor.js`
- **Issue**: Environment-aware monitor vs AI-enhanced predictive monitoring.
- **Resolution**: Extended monitor profiles to include experimental AI configuration while retaining prod/dev behavior.
- **Strategy**: Use `monitorProfiles` map and toggle AI routines only when `aiEnabled` is true.
- **Difficulty**: Medium
- **Time**: 18 minutes

#### Conflict 5: `docs/architecture.md`
- **Issue**: Balanced architecture doc vs experimental AI/ML architecture overlay.
- **Resolution**: Documented experimental capabilities within dedicated feature-flag section beneath standard architecture.
- **Strategy**: Preserve production documentation and add cautionary experimental appendix.
- **Difficulty**: Medium
- **Time**: 15 minutes

#### Conflict 6: `README.md`
- **Issue**: Production-focused README vs experimental build narrative.
- **Resolution**: Harmonized README to highlight production core, optional experimental features, and new FAQ.
- **Strategy**: Merge content, list versions, and clearly label experimental usage guidance.
- **Difficulty**: Medium
- **Time**: 15 minutes

## Most Challenging Parts

1. Balancing scripts between production stability and experimental features without breaking existing workflows.
2. Keeping multi-file JSON/YAML configurations consistent after structural changes.
3. Recovering history after practicing soft/mixed/hard resets and ensuring the remote reflected the intended timeline.
4. Remembering to document each conflict resolution strategy for future teammates.

## Key Learnings

### Technical Skills
- Practiced complex merge conflict resolution across YAML, JSON, shell, JS, and Markdown.
- Strengthened command over advanced Git operations (stash, rebase, cherry-pick, reset, reflog recovery).
- Learned to structure configuration files for multiple environments without duplication.

### Best Practices
- Favor feature flags to safely include experimental code paths.
- Stage and test incrementally during conflict resolution to avoid large error surfaces.
- Use descriptive merge commit messages capturing the resolution strategy.
- Document every workflow to accelerate future onboarding.

### Git Workflow Insights
- Reflog is invaluable for recovering work after aggressive resets.
- Cherry-picking is useful both for promoting feature commits and restoring history.
- Combining merge + rebase workflows requires disciplined pushing (force push only when necessary and documented).

## Reflection
This challenge demystified merge conflicts and reinforced that Git history is highly recoverable when commands are used deliberately. I now feel confident navigating complex repository states, integrating experimental features safely, and documenting the process for collaborators.
