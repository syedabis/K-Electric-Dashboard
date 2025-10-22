"use client";

import { useUser, useClerk } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LogOut, Shield, User } from 'lucide-react';
import Link from 'next/link';

interface AuthWrapperProps {
    children: React.ReactNode;
}

export default function AuthWrapper({ children }: AuthWrapperProps) {
    const { user, isLoaded } = useUser();
    const { signOut } = useClerk();

    // Show loading state while checking authentication
    if (!isLoaded) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
        );
    }

    // User is not signed in - show sign-in/sign-up options
    if (!user) {
        return (
            <div 
                className="min-h-screen bg-background p-4"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100vh'
                }}
            >
                <Card 
                    className="w-full max-w-md border border-destructive text-destructive"
                    style={{
                        margin: '0 auto',
                        width: '100%',
                        maxWidth: '28rem'
                    }}
                >
                    <CardHeader className="text-center">
                        <CardTitle className="flex items-center justify-center gap-2">
                            <Shield className="w-6 h-6 text-primary" />
                            Authentication Required
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-center text-muted-foreground">
                            Please sign in to access the dashboard.
                        </p>
                        <div className="flex flex-col gap-3">
                            <Link href="/sign-in" className="w-full">
                                <Button className="w-full">
                                    <User className="w-4 h-4 mr-2" />
                                    Sign In
                                </Button>
                            </Link>
                            <Link href="/sign-up" className="w-full">
                                <Button variant="outline" className="w-full">
                                    Create Account
                                </Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }

    // Check if user has admin role in public metadata
    const isAdmin = user.publicMetadata?.role === 'admin';

    // User is signed in but not admin - show access denied message
    if (!isAdmin) {
        return (
            <div 
                className="min-h-screen bg-background p-4"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100vh'
                }}
            >
                <Card 
                    className="w-full max-w-md border border-destructive text-destructive"
                    style={{
                        margin: '0 auto',
                        width: '100%',
                        maxWidth: '28rem'
                    }}
                >
                        <CardHeader className="text-center">
                            <CardTitle className="flex items-center justify-center gap-2 text-destructive">
                                <Shield className="w-6 h-6" />
                                Access Denied
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-center text-muted-foreground">
                                You don't have admin privileges to access this dashboard.
                            </p>
                            <div className="flex flex-col gap-3">
                                <Button
                                    variant="outline"
                                    className="w-full"
                                    onClick={() => signOut()}
                                >
                                    <LogOut className="w-4 h-4 mr-2" />
                                    Sign Out
                                </Button>
                                <div className="flex gap-2">
                                    <Link href="/sign-in" className="flex-1">
                                        <Button variant="ghost" className="w-full">
                                            Sign In
                                        </Button>
                                    </Link>
                                    <Link href="/sign-up" className="flex-1">
                                        <Button variant="ghost" className="w-full">
                                            Sign Up
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
            </div>
        );
    }

    // User is signed in and has admin role - show the dashboard
    return <>{children}</>;
}
