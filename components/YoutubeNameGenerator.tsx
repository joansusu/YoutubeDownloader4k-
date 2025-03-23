'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Copy, RefreshCw, Check } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import {
  CATEGORY_WORDS,
  CATEGORIES,
  SUFFIXES,
  PREFIXES,
  RANDOM_WORDS,
} from "@/lib/youtubeNames";


export function YoutubeNameGenerator() {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('Gaming');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [copiedAll, setCopiedAll] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [generatedNames, setGeneratedNames] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const copyAllUsernames = () => {
    try {
      const allUsernames = generatedNames.join('\n');
      navigator.clipboard.writeText(allUsernames);
      setCopiedAll(true);
      setTimeout(() => setCopiedAll(false), 2000);
      toast({
        title: 'All usernames copied!',
        description: 'All usernames have been copied to your clipboard.',
      });
    } catch (err) {
      toast({
        title: 'Error',
        description: 'Failed to copy usernames to clipboard.',
        variant: 'destructive',
      });
    }
  };

  const generateUsername = (baseName: string, categoryWords: string[] | undefined): string => {
    const random = Math.random();
    let username = '';

    if (random < 0.4) {
      username = PREFIXES[Math.floor(Math.random() * PREFIXES.length)] + baseName;
    } else if (random < 0.8) {
      username = baseName + SUFFIXES[Math.floor(Math.random() * SUFFIXES.length)];
    } else if (includeNumbers) {
      username = baseName + Math.floor(Math.random() * 999);
    } else {
      username = PREFIXES[Math.floor(Math.random() * PREFIXES.length)] + 
                baseName + 
                SUFFIXES[Math.floor(Math.random() * SUFFIXES.length)];
    }

    if (categoryWords) {
      if (Math.random() < 0.5) {
        username += categoryWords[Math.floor(Math.random() * categoryWords.length)];
      } else {
        username = categoryWords[Math.floor(Math.random() * categoryWords.length)] + username;
      }
    }
    
    if (includeNumbers && !username.match(/\d/) && Math.random() < 0.3) {
      username += Math.floor(Math.random() * 99);
    }

    return username;
  };

  const generateNames = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const baseNames = [];
      const inputName = name ? name.toLowerCase().replace(/[^a-z0-9]/g, '') : '';
      const categoryWords = CATEGORY_WORDS[category as keyof typeof CATEGORY_WORDS];

      // Generate 10 unique usernames
      for (let i = 0; i < 10; i++) {
        const baseName = inputName || RANDOM_WORDS[Math.floor(Math.random() * RANDOM_WORDS.length)];
        const username = generateUsername(baseName, categoryWords);
        baseNames.push(username);
      }

      setGeneratedNames(baseNames);
    } catch (err) {
      setError('Failed to generate usernames. Please try again.');
      toast({
        title: 'Error',
        description: 'Failed to generate usernames. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = async (username: string, index: number) => {
    try {
      await navigator.clipboard.writeText(username);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
      toast({
        title: 'Username copied!',
        description: `${username} has been copied to your clipboard.`,
      });
    } catch (err) {
      toast({
        title: 'Error',
        description: 'Failed to copy username to clipboard.',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="space-y-8">
      <Card className="p-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Enter your name or keywords
            </label>
            <Input
              placeholder="e.g., gaming, tech, reviews"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select category
            </label>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <Button
                  key={cat}
                  variant={category === cat ? 'default' : 'outline'}
                  onClick={() => setCategory(cat)}
                  className="text-sm"
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="numbers" className="text-sm font-medium text-gray-700">
              Include Numbers
            </Label>
            <Switch
              id="numbers"
              checked={includeNumbers}
              onCheckedChange={setIncludeNumbers}
            />
          </div>

          <Button
            onClick={generateNames}
            className="w-full"
            size="lg"
            disabled={isLoading}
          >
            {isLoading ? (
              <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
            ) : (
              <RefreshCw className="w-4 h-4 mr-2" />
            )}
            {isLoading ? 'Generating...' : 'Generate Usernames'}
          </Button>
        </div>
      </Card>

      {error && (
        <div className="text-red-500 text-sm mt-2">
          {error}
        </div>
      )}

      {generatedNames.length > 0 && (
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Generated Usernames</h2>
            <Button
              variant="outline"
              size="sm"
              className={`flex items-center gap-2 transition-colors duration-200 ${
                copiedAll ? 'bg-green-100 text-green-700' : ''
              }`}
              onClick={copyAllUsernames}
            >
              {copiedAll ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              Copy All
            </Button>
          </div>
          <div className="grid gap-3">
            {generatedNames.map((username, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-secondary rounded-lg"
                style={{
                  transition: 'background-color 0.2s ease-in-out'
                }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground w-6">{index + 1}.</span>
                  <span className={`font-mono text-lg ${
                    copiedIndex === index ? 'text-green-600' : ''
                  }`}>{username}</span>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(username, index)}
                  className={`transition-all duration-200 ${
                    copiedIndex === index ? 'text-green-600' : ''
                  }`}
                >
                  {copiedIndex === index ? (
                    <Check className="w-4 h-4 animate-in fade-in-0 zoom-in-0" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </Button>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}