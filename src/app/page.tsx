'use client'

import { useEffect, useRef, useState } from 'react'
import { LineChart, Line, BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts'
import { Shield, Search, Database, AlertCircle, ChevronRight, Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const stats = [
  { value: '306', label: 'Data Sources' },
  { value: '150+', label: 'Countries' },
  { value: '250M+', label: 'Records' },
  { value: '1.6M+', label: 'Alerts' },
]

const leakData = [
  { month: 'Jan', leaks: 2400 },
  { month: 'Feb', leaks: 1398 },
  { month: 'Mar', leaks: 9800 },
  { month: 'Apr', leaks: 3908 },
  { month: 'May', leaks: 4800 },
  { month: 'Jun', leaks: 3800 },
]

const testimonials = [
  {
    text: "The platform has revolutionized how we monitor data leaks. It's an invaluable tool for our security team.",
    author: "Sarah Chen",
    role: "CISO, TechCorp"
  },
  {
    text: "Comprehensive coverage and real-time alerts have helped us prevent numerous potential data breaches.",
    author: "Michael Rodriguez",
    role: "Security Director, DataSafe"
  }
]

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const radarRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = radarRef.current;
    if (!canvas) return;
  
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
  
    canvas.width = 600;
    canvas.height = 600;
  
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 200;
  
    function drawRadar() {
      // Ensure both ctx and canvas are still available
      if (!ctx || !canvas) return;
  
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      // Draw circles
      for (let i = 1; i <= 4; i++) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius * (i / 4), 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(74, 222, 128, ${i / 8})`;
        ctx.stroke();
      }
  
      // Draw scanning line
      const time = Date.now() / 2000;
      const lineAngle = time % (Math.PI * 2);
  
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(
        centerX + Math.cos(lineAngle) * radius,
        centerY + Math.sin(lineAngle) * radius
      );
      ctx.strokeStyle = 'rgba(74, 222, 128, 0.8)';
      ctx.lineWidth = 2;
      ctx.stroke();
  
      requestAnimationFrame(drawRadar);
    }
  
    drawRadar();
  }, []);
  

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <header className="border-b border-gray-800">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-green-400" />
            <span className="text-xl font-bold">LeakGuard</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="hover:text-green-400 transition-colors">Features</a>
            <a href="#statistics" className="hover:text-green-400 transition-colors">Statistics</a>
            <a href="#about" className="hover:text-green-400 transition-colors">About</a>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-green-400 text-black hover:bg-green-500">Register</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-gray-900 text-white">
                <DialogHeader>
                  <DialogTitle>Create Account</DialogTitle>
                  <DialogDescription className="text-gray-400">
                    Register to access our leak intelligence platform
                  </DialogDescription>
                </DialogHeader>
                <form className="space-y-4 mt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input 
                      placeholder="Full Name" 
                      className="bg-gray-800 border-gray-700"
                      pattern="^[A-Za-z\s]{2,}$"
                      required
                    />
                    <Input 
                      placeholder="Passport Series" 
                      className="bg-gray-800 border-gray-700"
                      pattern="^[A-Z]{2}\d{7}$"
                      required
                    />
                  </div>
                  <Input 
                    placeholder="JSHSHIR (16 digits)" 
                    className="bg-gray-800 border-gray-700"
                    pattern="^\d{16}$"
                    required
                  />
                  <Input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="bg-gray-800 border-gray-700"
                    pattern="^\+998\d{9}$"
                    required
                  />
                  <Input 
                    placeholder="Address" 
                    className="bg-gray-800 border-gray-700"
                    required
                  />
                  <Select>
                    <SelectTrigger className="bg-gray-800 border-gray-700">
                      <SelectValue placeholder="Select Gender" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-900">
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button type="submit" className="w-full bg-green-400 text-black hover:bg-green-500">
                    Create Account
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 space-y-6 z-10">
              <h1 className="text-5xl font-bold leading-tight">
                Advanced Threat <span className="text-green-400">Intelligence</span>
              </h1>
              <p className="text-xl text-gray-400">
                Monitor, detect, and prevent data leaks with our cutting-edge platform powered by advanced analytics.
              </p>
              <div className="flex space-x-4">
                <Button className="bg-green-400 text-black hover:bg-green-500">
                  Start Free Trial
                </Button>
                <Button variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black">
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 mt-10 lg:mt-0">
              <canvas 
                ref={radarRef} 
                className="w-full max-w-[600px] mx-auto"
                style={{ filter: 'drop-shadow(0 0 10px rgba(74, 222, 128, 0.3))' }}
              />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-gray-800 border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold text-green-400">
                      {stat.value}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Comprehensive <span className="text-green-400">Monitoring</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <Search className="h-12 w-12 text-green-400 mb-4" />
                  <CardTitle className='text-white'>Dark Web Monitoring</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-400">
                  Continuous scanning of dark web forums, marketplaces, and channels for leaked data.
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <Database className="h-12 w-12 text-green-400 mb-4" />
                  <CardTitle className='text-white'>Data Analysis</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-400">
                  Advanced analytics to identify patterns and predict potential data breaches.
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <AlertCircle className="h-12 w-12 text-green-400 mb-4" />
                  <CardTitle className='text-white'>Real-time Alerts</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-400">
                  Instant notifications when your sensitive data appears in leaked databases.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Chart Section */}
        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Leak <span className="text-green-400">Analytics</span>
            </h2>
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader>
                <CardTitle className='text-white'>Monthly Leak Detection</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={leakData} className='text-[#4ade80]'>
                      <XAxis dataKey="month" stroke="#4ade80" />
                      <YAxis stroke="#4ade80" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: '#1f2937', 
                          border: '1px solid #374151' 
                        }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="leaks" 
                        stroke="#4ade80" 
                        strokeWidth={2}
                        dot={{ fill: '#4ade80' }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              What Our <span className="text-green-400">Clients Say</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-gray-900 border-gray-800">
                  <CardContent className="pt-6">
                    <p className="text-lg mb-4 text-gray-200">"{testimonial.text}"</p>
                    <div>
                      <p className="font-semibold text-gray-300">{testimonial.author}</p>
                      <p className="text-gray-400">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-green-400">Features</a></li>
                <li><a href="#" className="hover:text-green-400">Pricing</a></li>
                <li><a href="#" className="hover:text-green-400">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-green-400">About</a></li>
                <li><a href="#" className="hover:text-green-400">Blog</a></li>
                <li><a href="#" className="hover:text-green-400">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-green-400">Documentation</a></li>
                <li><a href="#" className="hover:text-green-400">Support</a></li>
                <li><a href="#" className="hover:text-green-400">Status</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-green-400">Privacy</a></li>
                <li><a href="#" className="hover:text-green-400">Terms</a></li>
                <li><a href="#" className="hover:text-green-400">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 LeakGuard. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}