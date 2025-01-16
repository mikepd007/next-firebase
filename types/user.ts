export interface UserData {
  uid: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  stripeCustomerId?: string;
  subscriptionStatus?: 'active' | 'inactive' | 'trialing' | 'canceled';
  subscriptionTier?: 'free' | 'pro' | 'enterprise';
} 