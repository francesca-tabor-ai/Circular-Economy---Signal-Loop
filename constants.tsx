
import React from 'react';

export const COLORS = {
  primary: '#111827',
  secondary: '#4B5563',
  accent: 'linear-gradient(135deg, #facc15 0%, #10b981 33%, #06b6d4 66%, #3b82f6 100%)',
  bg: '#FFFFFF',
  card: '#FFFFFF',
  border: '#F3F4F6'
};

export const MOCK_CREATOR = {
  name: "Alex Rivera",
  handle: "@arivera",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
  followers: "125K",
  niche: "Culture & Tech"
};

export const FOUNDER_IMAGE = "https://i.postimg.cc/YjJSTD9n/5-Leo-Signal-Loop.png";

export const MOCK_TIERS = [
  {
    id: '1',
    name: 'Inner Circle',
    price: 49,
    perks: ['Weekly Strategy Sessions', 'Private DM Access', 'Zero-Fee Marketplace'],
    color: 'bg-yellow-400',
    members: 245
  },
  {
    id: '2',
    name: 'VIP Access',
    price: 19,
    perks: ['Exclusive Experience Passes', 'Premium Commentary', 'Early Drop Access'],
    color: 'bg-emerald-400',
    members: 1200
  },
  {
    id: '3',
    name: 'Founder',
    price: 9,
    perks: ['BTS Feed', 'Member Badges', 'Priority Support'],
    color: 'bg-blue-400',
    members: 3500
  }
];

export const MOCK_DROPS = [
  {
    id: 'd1',
    title: 'Paris Culture Deep Dive',
    type: 'Session',
    date: 'Oct 24',
    price: 35,
    scarcity: 100,
    status: 'Active',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&h=400&fit=crop'
  },
  {
    id: 'd2',
    title: 'Strategy Rooftop Stream',
    type: 'Stream',
    date: 'Nov 2',
    price: 15,
    scarcity: 500,
    status: 'Upcoming',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop'
  },
  {
    id: 'd3',
    title: 'Private Studio Tour',
    type: 'BTS',
    date: 'Closed',
    price: 50,
    scarcity: 50,
    status: 'Sold Out',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&h=400&fit=crop'
  }
];

export const MOCK_MARKET = [
  {
    id: 'm1',
    title: 'Genesis Access #42',
    owner: 'crypto_fan',
    originalPrice: 20,
    currentPrice: 85,
    type: 'Access Right',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop'
  },
  {
    id: 'm2',
    title: 'Studio Tour Seat',
    owner: 'early_bird',
    originalPrice: 50,
    currentPrice: 150,
    type: 'Experience Pass',
    image: 'https://images.unsplash.com/photo-1633167606207-d840b5070fc2?w=600&h=400&fit=crop'
  }
];
