/* =======================
TYPES & CONSTANTS
======================= */
export type RecorderType = "small" | "medium" | "large";
export type InputType = "small" | "medium" | "large";
export type Sentiment = "Like" | "Dislike" | "Neutral";
export type IssueStatus =
  | "NA"
  | "Open"
  | "In Progress"
  | "Ready For Review"
  | "Closed";
export const defaultSentiment: Sentiment = "Neutral";
export const DislikeSentiment: Sentiment = "Dislike";
export const defaultIssueStatus: IssueStatus = "NA";
/* =======================
GLOBAL STATE
======================= */
export interface GlobalState {
  UserDetails?: UserDetails | null;
  IsWelcomeWindowVisible: boolean;
  IsNewChatWindowVisible: boolean;
  IsChatWindowVisible: boolean;
  IsLoading: boolean;
  CurrentPrompt: string;
  CurrentSessionID: string;
  CurrentModel: string;
  ChatHistory: Session | null;
  IsAdminVisible: boolean;
  AmgenUserList: UserDetails[];
}
/* =======================
USER
======================= */
export interface UserDetails {
  user_id: string;
  user_name: string;
  first_name?: string;
  email: string;
  role?: string;
  IsAdmin?: boolean;
  Access?: { [key: string]: boolean };
}
/* =======================
SESSION & QUERY
======================= */
export interface BotPayload {
  prompt: string;
  session_id?: string;
  session_name?: string;
  model: string;
  user_id: string;
  // TODO: Verify if this is correct, added based on usage
}
export interface Session {
  session_id: string;
  session_name: string;
  user_id: string;
  created_at: string;
  updated_at: string;
  status: string;
  queries?: Query[];
}
export interface Query {
  query_id: string;
  user_prompt: string;
  agent_name: string;
  created_at: string;
  execution_time: number;
  status: string;
  ai_responses: AiResponse[];
}
/* =======================
AI RESPONSE
======================= */
export interface AiResponse {
  response_id: string;
  ai_generated_query: string | null;
  ai_response: string;
  agent_name: string;
  sentiment: Sentiment | null;
  feedback: string;
  execution_time: number;
  created_at: string;
  status: string;
  feedback_issue?: FeedbackIssue | null;
}
/* =======================
FEEDBACK ISSUE
======================= */
export interface FeedbackIssue {
  issue_id: string;
  response_id: string;
  created_by: string;
  created_at: string;
  current_status: string;
  assigned_to: string | null;
  latest_history?: FeedbackIssueHistory;
}
export interface FeedbackIssueHistory {
  history_id: string;
  action: string;
  status: string;
  comment: string | null;
  user_id: string;
  created_at: string;
  // TODO: Verify properties
}
/* =======================
AGENT
======================= */
export type Agent = {
  id: string;
  name: string;
  description: string;
};
/* =======================
SUGGESTED QUERY
======================= */
export interface SuggestedQuery {
  suggested_query_id: string;
  prompt: string;
  model: string;
  serial_number: number;
}
/* =======================
UI / DIMENSIONS
======================= */
export interface ElementDimensions {
  height: number;
  width: number;
}
export interface ChatBotDimensions {
  Visible: boolean;
  Pinned: boolean;
  Width: number;
}
/* =======================
API RESPONSE
======================= */
export interface APIResponseFormat {
  status: boolean;
  data?: any | null;
  error?: any | null;
}
