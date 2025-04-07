'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-hot-toast';

// Thread style options
const THREAD_STYLES = [
  {
    id: 'tweet-thread',
    name: 'Summarize in 5 Tweets',
    description: 'A concise Twitter thread with dark humor and sharp insights',
    type: 'thread',
    prompt: 'Summarize the core story of [BOOK] in 5 tweets with dark humor. Keep each tweet under 280 characters and use hashtags appropriately.'
  },
  {
    id: 'poem',
    name: 'Rewrite as a poem',
    description: 'A poetic interpretation capturing the essence of the book',
    type: 'poem',
    prompt: 'Create a heartfelt free verse poem (around 12-16 lines) that captures the emotional essence and key themes of [BOOK]. Use vivid imagery and language that reflects the book\'s tone.'
  },
  {
    id: 'therapist',
    name: 'Describe it like a therapist would',
    description: 'Analyzing the story through a therapeutic lens',
    type: 'scene',
    prompt: 'As a therapist discussing [BOOK] with a patient who just finished reading it, explain the key psychological insights, character motivations, and potential life lessons in a compassionate, therapeutic voice.'
  },
  {
    id: 'party',
    name: 'Explain it at a party',
    description: 'An entertaining, slightly tipsy explanation',
    type: 'scene',
    prompt: 'Explain [BOOK] as if you\'re at a party after a few drinks, trying to convince someone it\'s worth reading. Be enthusiastic, slightly exaggerated, and drop in a few pop culture references. Keep it engaging and fun.'
  }
];

// Type for thread responses
type LiteraryThread = {
  type: 'thread' | 'poem' | 'scene';
  style: string;
  generatedText: string;
};

type LoadingState = 'idle' | 'loading' | 'success' | 'error';

interface LiteraryThreadsFromOracleProps {
  bookTitle: string;
  bookSlug: string;
}

export const LiteraryThreadsFromOracle = ({ bookTitle, bookSlug }: LiteraryThreadsFromOracleProps) => {
  const [selectedStyle, setSelectedStyle] = useState(THREAD_STYLES[0].id);
  const [loadingState, setLoadingState] = useState<LoadingState>('idle');
  const [generatedThreads, setGeneratedThreads] = useState<LiteraryThread[]>([]);
  const [threadToShow, setThreadToShow] = useState<LiteraryThread | null>(null);

  // Find the selected thread style
  const selectedThreadStyle = THREAD_STYLES.find(style => style.id === selectedStyle) || THREAD_STYLES[0];

  // Mock function to simulate GPT generation
  // In a real implementation, this would call your backend API with the prompt
  const generateThreadFromOracle = async () => {
    setLoadingState('loading');
    
    try {
      // This would be a fetch call to your GPT endpoint in production
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate API call
      
      // Generate sample response based on thread type
      // In a real implementation, this would come from the API
      let generatedText = '';
      const style = selectedThreadStyle.name;
      const type = selectedThreadStyle.type as 'thread' | 'poem' | 'scene';
      
      if (type === 'thread') {
        generatedText = generateMockTweetThread(bookTitle);
      } else if (type === 'poem') {
        generatedText = generateMockPoem(bookTitle);
      } else {
        generatedText = generateMockScene(bookTitle, selectedThreadStyle.id);
      }
      
      const newThread: LiteraryThread = {
        type,
        style,
        generatedText
      };
      
      setGeneratedThreads(prev => [newThread, ...prev]);
      setThreadToShow(newThread);
      setLoadingState('success');
      toast.success('The Oracle has spoken!');
    } catch (error) {
      console.error('Error generating response:', error);
      setLoadingState('error');
      toast.error('The Oracle is silent. Please try again later.');
    }
  };

  // Helper function to copy text to clipboard
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => toast.success('Copied to clipboard!'))
      .catch(() => toast.error('Failed to copy. Please try again.'));
  };

  // Render thread content based on type
  const renderThreadContent = (thread: LiteraryThread) => {
    if (thread.type === 'thread') {
      const tweets = thread.generatedText.split('\n\n').filter(t => t.trim() !== '');
      
      return (
        <div className="space-y-4">
          {tweets.map((tweet, index) => (
            <motion.div 
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
                  <span className="text-lg">🦉</span>
                </div>
                <div>
                  <div className="font-medium">Paper Oracle</div>
                  <div className="text-gray-500 text-sm mb-2">@PaperOracle</div>
                  <p className="text-gray-800">{tweet}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      );
    }
    
    if (thread.type === 'poem') {
      return (
        <motion.div 
          className="bg-[url('/subtle-paper.png')] bg-amber-50 p-6 rounded-lg shadow-md max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="font-serif space-y-4">
            <h3 className="text-center text-xl mb-6 text-amber-800 font-medium">
              A Poetic Interpretation
            </h3>
            <div className="whitespace-pre-line text-center leading-relaxed">
              {thread.generatedText}
            </div>
            <div className="text-right text-sm text-gray-500 italic pt-4">
              —Generated by the Oracle
            </div>
          </div>
        </motion.div>
      );
    }
    
    // Scene (therapist or party)
    return (
      <motion.div 
        className="max-w-2xl mx-auto p-6 rounded-lg bg-white border-l-4 border-indigo-400 shadow-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-medium text-lg text-indigo-800">
            {thread.style}
          </h3>
          <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">
            Literary Perspective
          </span>
        </div>
        
        <div className="prose prose-indigo max-w-none">
          <p className="whitespace-pre-line">{thread.generatedText}</p>
        </div>
        
        <div className="mt-4 text-right text-sm text-gray-500">
          Generated by the Oracle
        </div>
      </motion.div>
    );
  };

  // Generate mock content for demos
  // These would be replaced by actual API calls
  const generateMockTweetThread = (bookTitle: string) => {
    if (bookTitle.includes('1984')) {
      return `Just finished reading 1984. Big Brother isn't just watching you—he's taking notes on your bathroom habits. Dystopia isn't a genre; it's Sunday's weather forecast. #1984 #Orwell #ThoughtPolice\n\nThe real horror of 1984 isn't the surveillance; it's that Winston's rebellion was so pathetically predictable that O'Brien was like "yawn, we planned for this 10 years ago." Even revolution is just another cog in the machine. #DoubleThink\n\nLanguage lesson from 1984: When they rename torture as "re-education," that's when you know you're in trouble. Words are the first territory dictators invade. #Newspeak #MiniTruth\n\nThe real twist of 1984: Winston doesn't just surrender—he genuinely loves Big Brother in the end. Most terrifying romance novel ever. Not about breaking the body, but owning the mind. #Room101 #FreedomIsSlavery\n\nMost disturbing realization about 1984: We're not headed toward it—we've built a luxury version. Telescreens with better resolution, voluntary surveillance, and we even pay for the privilege. #PrivacyIsDead #PartyMember`;
    }
    
    // Generic response for other books
    return `Just finished reading ${bookTitle}. What a journey through the human experience. Some books entertain, but this one transforms. #MustRead #BookTwitter\n\nThe genius of ${bookTitle} isn't just the plot—it's how it reveals society's machinery while making you question your place in it. This is literature that haunts you at 3am. #DeepThoughts\n\nUnpopular opinion: ${bookTitle} isn't really about what everyone thinks it's about. It's actually a perfect mirror showing us our own collective delusions. Mind = blown. #BookAnalysis\n\nThe character development in ${bookTitle} is like watching someone build a house just to burn it down, and somehow you feel both devastated and enlightened. Art at its finest. #CharacterArcs\n\nAfter finishing ${bookTitle}, I'm left with that rare book hangover where you're not quite ready to live in the real world again. Some stories don't just end—they live in you. #ReadingLife`;
  };

  const generateMockPoem = (bookTitle: string) => {
    if (bookTitle.includes('1984')) {
      return `Telescreens flicker in half-lit rooms,\nWatching, always watching,\nAs truth dissolves into whatever\nThe Party proclaims today.\n\nWinston's diary—a silent scream\nInk against forbidden paper,\nA rebellion measured in sentences,\nIn thoughts they haven't yet stolen.\n\nJulia passes her note,\nA secret folded like origami:\n"I love you" – three words\nThat could collapse an empire.\n\nIn Room 101, a man faces\nNot death, but the death of self—\nThe final victory isn't when you die\nBut when you surrender your last private truth.\n\nAnd afterward, sitting in the Chestnut Tree,\nA tear rolls down for no reason at all,\nExcept that he loves Big Brother now,\nAnd the war is finally, terribly won.`;
    }
    
    // Generic poem for other books
    return `Between the pages of ${bookTitle},\nWorlds unfold like origami birds,\nEach crease a decision,\nEach fold a consequence.\n\nCharacters walk through doorways\nWe've all stood before—\nHesitant, brave, terrified, alive—\nTheir choices echoing our own unspoken fears.\n\nWords build bridges across\nThe chasms we cannot name,\nSpanning the distance between\nWhat we show and who we are.\n\nAnd in the quiet after the last page turns,\nWe sit with ghosts of ink and thought,\nChanged in ways we cannot measure\nBy stories that were never ours, yet somehow are.`;
  };

  const generateMockScene = (bookTitle: string, style: string) => {
    if (bookTitle.includes('1984') && style === 'therapist') {
      return `What interests me about your experience reading 1984 is how it might connect to your own feelings about control and vulnerability. Orwell created a world where Winston's deepest fear—rats—becomes the tool that breaks him, forcing him to betray his authentic self and his love for Julia.\n\nMany of us develop similar psychological defense mechanisms. When faced with overwhelming anxiety or trauma, we sometimes surrender parts of ourselves that feel too painful to protect. Winston's final acceptance—genuinely loving Big Brother—represents a profound psychological adaptation. It's not simple brainwashing; it's the mind protecting itself from unbearable contradiction.\n\nI wonder if you noticed how the book explores the relationship between memory and identity? When the Party controls history and language, they control how people understand themselves. This might resonate with experiences in your own life where narratives imposed by others—perhaps family systems or societal expectations—shaped how you see yourself.\n\nPerhaps the most therapeutic insight from 1984 is recognizing that awareness itself is revolutionary. By noticing these dynamics in the novel, you're already engaging in the kind of critical thinking that totalitarian systems work to eliminate. What aspects of Winston's struggle felt most relevant to your own life?`;
    } else if (bookTitle.includes('1984') && style === 'party') {
      return `Okay, so 1984? *takes sip* Absolute MASTERPIECE. Think Black Mirror but written in the 1940s! This guy Orwell basically predicted EVERYTHING—social media, fake news, cancel culture—all of it! *gestures enthusiastically*\n\nSo there's this guy Winston, right? Works at the Ministry of Truth, which is just *chef's kiss* perfect irony because his ENTIRE JOB is literally rewriting history! Like, imagine if your job was editing Wikipedia but making everything WORSE. And the whole time, there's Big Brother watching EVERYTHING—like if Alexa and your FBI agent monitoring your laptop camera had a dystopian baby.\n\nThe love story? *leans in* SCANDALOUS. Winston hooks up with this rebel girl Julia, and their whole relationship is basically one giant middle finger to the government. It's like if Tinder was illegal and every date could get you tortured. SO SPICY!\n\nAnd then—oh my god—the ending? *nearly spills drink* DEVASTATING. Makes Game of Thrones look like a Disney movie. I literally threw the book across the room. You HAVE to read it. I'm telling you, it's like The Handmaid's Tale and The Matrix had a baby, but way more depressing. It'll ruin your week in the BEST possible way!\n\n*whispers dramatically* Two plus two equals five, my friend. *winks and takes another sip*`;
    }
    
    // Generic responses for other books
    if (style === 'therapist') {
      return `What I find fascinating about your connection to ${bookTitle} is how it might mirror aspects of your own emotional landscape. The characters' journeys often represent universal psychological patterns that resonate with our personal experiences.\n\nThe central conflicts in the book can be viewed as external manifestations of internal struggles we all face: the tension between desire and responsibility, the search for meaning amid chaos, the need for connection despite fear of vulnerability.\n\nI'm curious about which character resonated most with you, and why? Sometimes the characters who provoke the strongest reactions—positive or negative—are reflecting aspects of ourselves we're either embracing or resisting.\n\nThe transformation arc in ${bookTitle} offers a valuable framework for understanding personal growth. Notice how change rarely follows a linear path—it involves regression, resistance, and breakthrough moments that often come after the greatest challenges.\n\nPerhaps we can use this narrative as a lens to explore your own journey. What patterns do you recognize? Which themes feel most relevant to your current life situation? These insights might offer new perspectives on your own story.`;
    } else {
      return `Okay, so ${bookTitle}? *gestures with drink* Absolutely MIND-BLOWING. You haven't read it yet? Oh my god, we can't even be friends right now. *laughs*\n\nSeriously though, it's like if your favorite Netflix show actually had DEPTH and made you question your entire EXISTENCE. I stayed up until 3 AM finishing it, and then just sat there questioning everything I thought I knew about life. That good.\n\nThe main character is basically all of us, just trying to figure out this mess called life while everything goes completely sideways. It's like that time I tried to make sourdough during the pandemic, but with WAY higher stakes.\n\nAnd the plot twists? *almost spills drink* I literally gasped out loud on the subway reading this. People stared. I did not care. It's THAT good.\n\nIt's kind of like if *thinks for a second* Ted Lasso and Succession had a literary baby. Heart-warming but also completely devastating? Does that make sense? Probably not, I'm on my third glass of wine, but TRUST ME on this one.\n\nYou need to read it so we can talk about it. I have THEORIES. *leans in dramatically* So. Many. Theories.`;
    }
  };

  return (
    <div className="w-full">
      <h2 className="text-3xl font-serif mb-2">Literary Threads</h2>
      <p className="text-gray-600 mb-8 max-w-3xl">
        Ask the Oracle to reimagine {bookTitle} through different literary styles and perspectives.
      </p>

      <div className="bg-gradient-to-br from-indigo-50 to-amber-50 p-6 rounded-xl border border-indigo-100 shadow-sm mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-end">
          <div className="flex-grow">
            <label htmlFor="thread-style" className="block text-sm font-medium text-gray-700 mb-1">
              Choose a style
            </label>
            <select
              id="thread-style"
              value={selectedStyle}
              onChange={(e) => setSelectedStyle(e.target.value)}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              {THREAD_STYLES.map((style) => (
                <option key={style.id} value={style.id}>
                  {style.name}
                </option>
              ))}
            </select>
            <p className="mt-1 text-sm text-gray-500">
              {selectedThreadStyle.description}
            </p>
          </div>
          
          <button
            onClick={generateThreadFromOracle}
            disabled={loadingState === 'loading'}
            className="px-5 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors shadow-sm flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loadingState === 'loading' ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Consulting the Oracle...
              </>
            ) : (
              <>
                <span>Ask the Oracle</span>
                <span className="text-lg">🔮</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Thread Display */}
      <AnimatePresence mode="wait">
        {threadToShow && (
          <motion.div
            key={`${threadToShow.type}-${threadToShow.style}-${Date.now()}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-medium text-gray-800">
                {threadToShow.style}
              </h3>
              <button
                onClick={() => copyToClipboard(threadToShow.generatedText)}
                className="text-indigo-600 hover:text-indigo-800 text-sm flex items-center gap-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copy
              </button>
            </div>
            
            {renderThreadContent(threadToShow)}
            
            <div className="mt-4 flex justify-end">
              <button
                onClick={generateThreadFromOracle}
                className="text-sm text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Regenerate
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Previous Threads */}
      {generatedThreads.length > 1 && (
        <div className="mt-12">
          <h3 className="text-xl font-medium text-gray-800 mb-4">Previously Generated</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {generatedThreads.slice(1).map((thread, index) => (
              <div 
                key={index}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => setThreadToShow(thread)}
              >
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium text-gray-800">{thread.style}</h4>
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                    {thread.type === 'thread' ? 'Tweet Thread' : thread.type === 'poem' ? 'Poem' : 'Prose'}
                  </span>
                </div>
                <p className="text-gray-600 text-sm line-clamp-3">
                  {thread.generatedText.substring(0, 150)}...
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}; 