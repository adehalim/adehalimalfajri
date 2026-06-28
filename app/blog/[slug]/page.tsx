import { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArticleDetail } from "@/components/blog/ArticleDetail";

const articles = {
  "integrating-technology-arabic-learning": {
    title: "Integrating Technology in Arabic Language Learning: A Comprehensive Guide",
    content: `
## Introduction

The landscape of Arabic language education has been significantly transformed by the integration of modern technology. As we navigate the 21st century, the traditional methods of teaching Arabic are being complemented, and in some cases, revolutionized by digital tools, applications, and platforms.

## The Digital Revolution in Arabic Education

Technology has opened new avenues for Arabic language learners that were previously unimaginable. From interactive mobile applications to sophisticated learning management systems, students now have access to resources that make learning more engaging and effective.

### Key Technological Innovations

1. **Mobile Learning Applications**: Apps that provide vocabulary drills, grammar exercises, and pronunciation guides.
2. **Virtual Reality (VR)**: Immersive environments for practicing Arabic conversations.
3. **AI-Powered Tutors**: Personalized learning paths based on student performance.
4. **Digital Libraries**: Access to thousands of Arabic texts and resources.

## Research Findings

Recent studies have demonstrated that students who utilize technology-enhanced learning methods show a 30% improvement in vocabulary retention compared to traditional methods. The interactive nature of digital tools keeps students engaged for longer periods.

## Implementation Strategies

For educators looking to integrate technology, consider these steps:

- Assess current technological infrastructure
- Identify appropriate tools for your student population
- Provide adequate training for both students and teachers
- Monitor and evaluate effectiveness regularly

## Conclusion

The integration of technology in Arabic language education is not just a trend—it's a fundamental shift in how we approach language learning. By embracing these tools, we can create more effective, engaging, and accessible learning experiences.
    `,
    date: "2024-06-15",
    category: "Educational Technology",
    readingTime: 8,
    author: "Ade Halim Alfajri",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  "gamification-arabic-vocabulary": {
    title: "The Role of Gamification in Arabic Vocabulary Acquisition",
    content: `
## Introduction

Gamification—the application of game-design elements in non-game contexts—has emerged as a powerful tool in language education. This article explores how gamification can enhance Arabic vocabulary acquisition.

## What is Gamification?

Gamification involves incorporating elements such as:
- Points and scoring systems
- Badges and achievements
- Leaderboards
- Progress tracking
- Challenges and quests

## Benefits for Arabic Learning

Arabic vocabulary presents unique challenges due to its root system and morphological complexity. Gamification helps by:

1. Making repetitive practice enjoyable
2. Providing immediate feedback
3. Creating social learning environments
4. Motivating continued engagement

## Case Studies

Several educational institutions have reported significant improvements in student vocabulary retention after implementing gamified learning systems.

## Implementation Tips

- Start with simple game mechanics
- Connect rewards to meaningful achievements
- Ensure content is culturally appropriate
- Balance competition with collaboration

## Conclusion

Gamification offers an innovative approach to Arabic vocabulary acquisition that aligns with modern learning preferences and digital literacy.
    `,
    date: "2024-05-28",
    category: "Learning Strategies",
    readingTime: 6,
    author: "Ade Halim Alfajri",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  "effective-arabic-curriculum": {
    title: "Building Effective Arabic Curriculum for Modern Learners",
    content: `
## Introduction

Designing an effective Arabic curriculum requires balancing traditional pedagogical approaches with modern educational needs. This article presents a framework for developing curricula that serve contemporary learners.

## Understanding Modern Learners

Today's Arabic learners are:
- Digital natives
- Multitaskers
- Visually oriented
- Socially connected

## Curriculum Components

### 1. Foundational Skills
- Arabic script recognition
- Basic phonetics
- Essential vocabulary

### 2. Communicative Competence
- Practical conversations
- Cultural contexts
- Situational language use

### 3. Digital Literacy
- Using Arabic on digital platforms
- Navigating Arabic digital content
- Understanding Arabic digital culture

## Assessment Strategies

Modern assessment should include:
- Portfolio-based evaluation
- Digital project presentations
- Collaborative assessments
- Self-reflection components

## Conclusion

An effective Arabic curriculum must evolve with the times while maintaining respect for the rich tradition and cultural significance of the language.
    `,
    date: "2024-04-20",
    category: "Curriculum",
    readingTime: 10,
    author: "Ade Halim Alfajri",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug as keyof typeof articles];
  if (!article) {
    return {
      title: "Article Not Found",
    };
  }
  return {
    title: article.title,
    description: article.title,
  };
}

export function generateStaticParams() {
  return [
    { slug: "integrating-technology-arabic-learning" },
    { slug: "gamification-arabic-vocabulary" },
    { slug: "effective-arabic-curriculum" },
  ];
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles[slug as keyof typeof articles];

  if (!article) {
    return (
      <>
        <Navbar />
        <main className="pt-24 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-2">Article Not Found</h1>
            <p className="text-muted-foreground">The article you are looking for does not exist.</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-24">
        <ArticleDetail article={article} />
      </main>
      <Footer />
    </>
  );
}
