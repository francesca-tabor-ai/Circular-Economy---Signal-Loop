
export enum ViewType {
  LANDING_PAGE = 'LANDING_PAGE',
  CREATOR_DASHBOARD = 'CREATOR_DASHBOARD',
  FAN_EXPERIENCE = 'FAN_EXPERIENCE',
  MARKETPLACE = 'MARKETPLACE',
  STRATEGY_AI = 'STRATEGY_AI',
  ABOUT = 'ABOUT'
}

export interface CreatorProfile {
  name: string;
  handle: string;
  avatar: string;
  followers: string;
  niche: string;
}

export interface MembershipTier {
  id: string;
  name: string;
  price: number;
  perks: string[];
  color: string;
  members: number;
}

export interface ExperienceDrop {
  id: string;
  title: string;
  type: 'Stream' | 'Event' | 'BTS' | 'Session';
  date: string;
  price: number;
  scarcity: number;
  status: 'Active' | 'Upcoming' | 'Sold Out';
  image: string;
}

export interface MarketItem {
  id: string;
  title: string;
  owner: string;
  originalPrice: number;
  currentPrice: number;
  type: string;
  image: string;
}

export interface FanStatus {
  rank: string;
  points: number;
  badge: string;
  nextTier: string;
  progress: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
