'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type UserData = {
  firstName: string
  lastName: string
  email: string
  companyName: string
  companySize: string
  industry: string
  productInterest: string
}

const initialUserData: UserData = {
  firstName: '',
  lastName: '',
  email: '',
  companyName: '',
  companySize: '',
  industry: '',
  productInterest: ''
}

export function OnboardingWizard() {
  const [step, setStep] = useState(1)
  const [userData, setUserData] = useState<UserData>(initialUserData)

  const updateUserData = (field: keyof UserData, value: string) => {
    setUserData(prevData => ({ ...prevData, [field]: value }))
  }

  const nextStep = () => setStep(prevStep => prevStep + 1)
  const prevStep = () => setStep(prevStep => prevStep - 1)

  const renderStep = () => {
    switch (step) {
      case 1:
        return <PersonalInfo userData={userData} updateUserData={updateUserData} />
      case 2:
        return <CompanyDetails userData={userData} updateUserData={updateUserData} />
      case 3:
        return <ProductPreferences userData={userData} updateUserData={updateUserData} />
      case 4:
        return <Confirmation userData={userData} />
      default:
        return null
    }
  }

  return (
    <Card className="w-[550px]">
      <CardHeader>
        <CardTitle>SaaS Onboarding - Step {step} of 4</CardTitle>
      </CardHeader>
      <CardContent>
        {renderStep()}
      </CardContent>
      <CardFooter className="flex justify-between">
        {step > 1 && (
          <Button variant="outline" onClick={prevStep}>
            Previous
          </Button>
        )}
        {step < 4 ? (
          <Button onClick={nextStep}>Next</Button>
        ) : (
          <Button onClick={() => console.log('Onboarding complete:', userData)}>
            Complete Onboarding
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

function PersonalInfo({ userData, updateUserData }: { userData: UserData; updateUserData: (field: keyof UserData, value: string) => void }) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="firstName">First Name</Label>
        <Input
          id="firstName"
          value={userData.firstName}
          onChange={(e) => updateUserData('firstName', e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="lastName">Last Name</Label>
        <Input
          id="lastName"
          value={userData.lastName}
          onChange={(e) => updateUserData('lastName', e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={userData.email}
          onChange={(e) => updateUserData('email', e.target.value)}
        />
      </div>
    </div>
  )
}

function CompanyDetails({ userData, updateUserData }: { userData: UserData; updateUserData: (field: keyof UserData, value: string) => void }) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="companyName">Company Name</Label>
        <Input
          id="companyName"
          value={userData.companyName}
          onChange={(e) => updateUserData('companyName', e.target.value)}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="companySize">Company Size</Label>
        <Select value={userData.companySize} onValueChange={(value) => updateUserData('companySize', value)}>
          <SelectTrigger id="companySize">
            <SelectValue placeholder="Select company size" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1-10">1-10 employees</SelectItem>
            <SelectItem value="11-50">11-50 employees</SelectItem>
            <SelectItem value="51-200">51-200 employees</SelectItem>
            <SelectItem value="201-500">201-500 employees</SelectItem>
            <SelectItem value="500+">500+ employees</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="industry">Industry</Label>
        <Select value={userData.industry} onValueChange={(value) => updateUserData('industry', value)}>
          <SelectTrigger id="industry">
            <SelectValue placeholder="Select industry" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="technology">Technology</SelectItem>
            <SelectItem value="finance">Finance</SelectItem>
            <SelectItem value="healthcare">Healthcare</SelectItem>
            <SelectItem value="education">Education</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

function ProductPreferences({ userData, updateUserData }: { userData: UserData; updateUserData: (field: keyof UserData, value: string) => void }) {
  return (
    <div className="space-y-4">
      <Label>Which product are you most interested in?</Label>
      <RadioGroup value={userData.productInterest} onValueChange={(value) => updateUserData('productInterest', value)}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="productA" id="productA" />
          <Label htmlFor="productA">Product A</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="productB" id="productB" />
          <Label htmlFor="productB">Product B</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="productC" id="productC" />
          <Label htmlFor="productC">Product C</Label>
        </div>
      </RadioGroup>
    </div>
  )
}

function Confirmation({ userData }: { userData: UserData }) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Please confirm your information:</h3>
      <p><strong>Name:</strong> {userData.firstName} {userData.lastName}</p>
      <p><strong>Email:</strong> {userData.email}</p>
      <p><strong>Company:</strong> {userData.companyName}</p>
      <p><strong>Company Size:</strong> {userData.companySize}</p>
      <p><strong>Industry:</strong> {userData.industry}</p>
      <p><strong>Product Interest:</strong> {userData.productInterest}</p>
    </div>
  )
}