import React, { useState } from 'react';
import ParallaxSection from '../Home/ParallaxSection';

const TherapeuticModalities = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubItem, setActiveSubItem] = useState(null);

  const categories = [
    {
      id: 'clientCentered',
      title: 'Client-Centered Approaches',
      items: [
        { id: 'personCentred', title: 'Person-Centred Therapy', content: 'Person-Centred Therapy focuses on the client’s ability to self-heal and grow within a supportive, non-judgmental environment.' },
        { id: 'strengthBased', title: 'Strength-Based Therapy', content: 'Strength-Based Therapy emphasizes the individual’s strengths and resources to overcome challenges and achieve goals.' },
        { id: 'psychodynamic', title: 'Psychodynamic Therapy', content: 'Psychodynamic Therapy explores the influence of the unconscious mind and past experiences on current behavior and emotions.' },
      ],
    },
    {
      id: 'cognitiveBehavioural',
      title: 'Cognitive and Behavioural Approaches',
      items: [
        { id: 'cognitiveBehavioural', title: 'Cognitive Behavioural Therapy', content: 'Cognitive Behavioural Therapy (CBT) helps individuals identify and change negative thought patterns and behaviors.' },
        { id: 'dialecticalBehavioural', title: 'Dialectical Behavioural Therapy', content: 'Dialectical Behavioural Therapy (DBT) combines cognitive-behavioral techniques with mindfulness to help manage emotions and relationships.' },
        { id: 'acceptanceCommitment', title: 'Acceptance and Commitment Therapy', content: 'Acceptance and Commitment Therapy (ACT) uses acceptance and mindfulness strategies to increase psychological flexibility.' },
        { id: 'solutionsFocused', title: 'Solutions-Focused Therapy', content: 'Solutions-Focused Therapy emphasizes finding practical solutions to achieve immediate goals.' },
        { id: 'motivationalInterviewing', title: 'Motivational Interviewing', content: 'Motivational Interviewing is a collaborative approach that helps individuals resolve ambivalence and commit to positive change.' },
      ],
    },
    {
      id: 'emotionTraumaFocused',
      title: 'Emotion and Trauma-Focused Approaches',
      items: [
        { id: 'emotionFocused', title: 'Emotion-Focused Therapy', content: 'Emotion-Focused Therapy (EFT) helps individuals process and manage emotions to improve well-being.' },
        { id: 'compassionFocused', title: 'Compassion-Focused Therapy', content: 'Compassion-Focused Therapy (CFT) encourages self-compassion and empathy to reduce shame and self-criticism.' },
        { id: 'traumaInformed', title: 'Trauma-Informed Therapy', content: 'Trauma-Informed Therapy is sensitive to the impact of trauma on an individual’s life and focuses on safety and empowerment.' },
        { id: 'attachmentBased', title: 'Attachment-Based Therapy', content: 'Attachment-Based Therapy examines the role of early attachment experiences in shaping emotional and relational patterns.' },
      ],
    },
    {
      id: 'creativeExpressive',
      title: 'Creative and Expressive Approaches',
      items: [
        { id: 'playTherapy', title: 'Play Therapy', content: 'Play Therapy uses play as a means for children to express emotions and resolve issues in a safe environment.' },
        { id: 'artTherapy', title: 'Art Therapy', content: 'Art Therapy encourages self-expression through art to promote emotional healing and personal growth.' },
        { id: 'narrativeTherapy', title: 'Narrative Therapy', content: 'Narrative Therapy involves re-authoring the stories individuals tell about their lives to foster empowerment and change.' },
      ],
    },
  ];

  const toggleCategory = (categoryId) => {
    setActiveCategory(activeCategory === categoryId ? null : categoryId);
    setActiveSubItem(null); // Collapse all sub-items when toggling category
  };

  const toggleSubItem = (subItemId) => {
    setActiveSubItem(activeSubItem === subItemId ? null : subItemId);
  };

  return (
    <ParallaxSection image={`${process.env.PUBLIC_URL}/Images/background.jpg`}>
      <div style={styles.container}>
        <h2 style={styles.header}>Therapeutic Modalities</h2>
        {categories.map((category) => (
          <div key={category.id} style={styles.category}>
            <button
              onClick={() => toggleCategory(category.id)}
              style={{ ...styles.button, ...styles.categoryButton }}
            >
              {category.title}
            </button>
            {activeCategory === category.id && (
              <div style={styles.subItems}>
                {category.items.map((item) => (
                  <div key={item.id} style={styles.subItem}>
                    <button
                      onClick={() => toggleSubItem(item.id)}
                      style={styles.button}
                    >
                      {item.title}
                    </button>
                    {activeSubItem === item.id && (
                      <div style={styles.content}>
                        <p>{item.content}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </ParallaxSection>
  );
};

const styles = {
  container: {
    backgroundColor: 'transparent',
    padding: '40px 20px',
    maxWidth: '1000px',
    margin: '0 auto',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
  },
  header: {
    fontFamily: 'Libre Baskerville, serif',
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '30px',
    textAlign: 'center',
  },
  category: {
    marginBottom: '20px',
  },
  categoryButton: {
    backgroundColor: '#3b83f6',
    color: '#fff',
    fontSize: '1.5rem',
  },
  button: {
    display: 'block',
    width: '100%',
    textAlign: 'left',
    padding: '10px 20px',
    fontSize: '1.2rem',
    fontFamily: 'Libre Baskerville, serif',
    color: '#333',
    border: 'none',
    borderRadius: '4px',
    background: 'none',
    cursor: 'pointer',
    outline: 'none',
    transition: 'background 0.3s',
  },
  subItems: {
    paddingLeft: '20px',
    marginTop: '10px',
  },
  subItem: {
    marginBottom: '10px',
  },
  content: {
    padding: '10px 20px',
    color: '#555',
    backgroundColor: 'rgba(240, 240, 240, 0.8)',
    borderRadius: '4px',
    marginTop: '5px',
  },
};

export default TherapeuticModalities;
