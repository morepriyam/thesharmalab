import { Redis } from '@upstash/redis'
import { Ratelimit } from '@upstash/ratelimit'
import validator from 'validator';
import xss from 'xss';

// Initialize Redis client (you'll need to add UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN to .env)
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL || '',
  token: process.env.UPSTASH_REDIS_REST_TOKEN || '',
})

// Create a new ratelimiter that allows 1 request per 24 hours per IP
export const ratelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.slidingWindow(1, '24 h'),
  analytics: true, // Enable analytics for monitoring
})

// Validate and sanitize contact form input
export const validateContactInput = (data: { 
  name: string, 
  email: string, 
  message: string,
  honeypot?: string // Hidden field to catch bots
}) => {
  const errors: string[] = [];

  // Check honeypot field
  if (data.honeypot) {
    errors.push('Bot detected');
    return { isValid: false, errors };
  }

  // Validate name
  if (!data.name || !validator.isLength(data.name, { min: 2, max: 50 })) {
    errors.push('Name must be between 2 and 50 characters');
  }

  // Validate email
  if (!data.email || !validator.isEmail(data.email)) {
    errors.push('Invalid email address');
  }

  // Validate message
  if (!data.message || !validator.isLength(data.message, { min: 10, max: 1000 })) {
    errors.push('Message must be between 10 and 1000 characters');
  }

  // Sanitize inputs
  const sanitizedData = {
    name: xss(data.name),
    email: xss(data.email),
    message: xss(data.message),
  };

  return {
    isValid: errors.length === 0,
    errors,
    sanitizedData,
  };
};

// Get client IP from various headers
export const getClientIP = (request: Request): string => {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  
  const ip = forwarded 
    ? forwarded.split(',')[0] 
    : realIP 
    ? realIP 
    : '127.0.0.1';
    
  return ip;
}; 