'use client'

import { FC, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { useUser } from "reactfire";
import { useRouter } from "next/navigation";

export const UserAccount: FC = () => {
  const { data: user, status } = useUser();
  const router = useRouter();

  // Handle authentication redirect in useEffect
  useEffect(() => {
    if (status !== 'loading' && !user) {
      router.push('/login');
    }
  }, [user, status, router]);

  // Handle loading state
  if (status === 'loading') {
    return (
      <div className="container max-w-4xl py-8">
        <p>Loading...</p>
      </div>
    );
  }

  // Return null if not authenticated (redirect will happen in useEffect)
  if (!user) {
    return null;
  }

  return (
    <div className="container max-w-4xl py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-heading font-semibold mb-1">Account</h1>
          <p className="text-muted-foreground">
            Manage your account settings and subscription
          </p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Profile Section */}
        <Card>
          <CardHeader>
            <CardTitle>Profile</CardTitle>
            <CardDescription>Your personal information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium">Email</label>
              <p className="text-muted-foreground">{user.email}</p>
            </div>
            <div className="flex gap-4">
              <Button variant="outline">Update Profile</Button>
              <Button variant="outline">Change Password</Button>
            </div>
          </CardContent>
        </Card>

        {/* Subscription Section */}
        <Card>
          <CardHeader>
            <CardTitle>Subscription</CardTitle>
            <CardDescription>Your current plan and usage</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium">Free Plan</h3>
                <p className="text-sm text-muted-foreground">
                  10 prompts per month
                </p>
              </div>
              <Button variant="default">Upgrade Plan</Button>
            </div>
            <div className="pt-4 border-t">
              <p className="text-sm text-muted-foreground">
                Prompts used this month: 4/10
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Settings Section */}
        <Card>
          <CardHeader>
            <CardTitle>Settings</CardTitle>
            <CardDescription>Manage your preferences</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Button variant="outline">Extension Settings</Button>
              <Button variant="outline">Notification Preferences</Button>
            </div>
          </CardContent>
        </Card>

        {/* Danger Zone */}
        <Card className="border-destructive/20">
          <CardHeader>
            <CardTitle className="text-destructive">Danger Zone</CardTitle>
          </CardHeader>
          <CardContent>
            <Button variant="destructive">Delete Account</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}; 