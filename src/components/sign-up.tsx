'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';

export default function SignUpComponent() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!firstName || !lastName || !email || !password) {
      setError('All fields are required');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }

    // Here you would typically make an API call to create the user
    // For demonstration, we'll just log the data
    console.log('Signup data:', { firstName, lastName, email, password });

    // Reset form after successful submission
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Card className='w-full max-w-md mx-auto'>
      <CardHeader>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>Create a new account to get started.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div className='grid grid-cols-2 gap-4'>
            <div className='space-y-2'>
              <Label htmlFor='firstName'>First name</Label>
              <Input
                id='firstName'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder='John'
              />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='lastName'>Last name</Label>
              <Input
                id='lastName'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder='Doe'
              />
            </div>
          </div>
          <div className='space-y-2'>
            <Label htmlFor='email'>Email</Label>
            <Input
              id='email'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='john.doe@example.com'
            />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='password'>Password</Label>
            <Input
              id='password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='••••••••'
            />
          </div>
          {error && (
            <div className='bg-destructive/15 text-destructive text-sm p-3 rounded-md flex items-center'>
              <AlertCircle className='h-4 w-4 mr-2' />
              {error}
            </div>
          )}
          <Button type='submit' className='w-full'>
            Sign Up
          </Button>
        </form>
      </CardContent>
      <CardFooter className='flex justify-center'>
        <p className='text-sm text-muted-foreground'>
          Already have an account?{' '}
          <a href='/login' className='text-primary hover:underline'>
            Log in
          </a>
        </p>
      </CardFooter>
    </Card>
  );
}
