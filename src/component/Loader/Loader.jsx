import React, { useState, useEffect } from 'react';

const LoadingPage = ({title , head}) => {
 
  let textIndex = 0;
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('waiting your task is processing');
  const [heading, setHeading] = useState("waiting your task is processing");
  useEffect(() => {

   const texts =[title];
   setLoadingText(title);
   setHeading(head);
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    const textInterval = setInterval(() => {
      textIndex = (textIndex + 1) % texts.length;
      setLoadingText(texts[textIndex]);
    }, 1000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, []);

  const styles = {
    loadingPage: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    },
    loadingContent: {
      position: 'relative',
      zIndex: 10,
      textAlign: 'center',
      color: 'white'
    },
    logoContainer: {
      marginBottom: '2rem',
      display: 'flex',
      justifyContent: 'center'
    },
    loadingLogo: {
      width: '120px',
      height: '120px',
      position: 'relative',
      animation: 'pulse 2s ease-in-out infinite'
    },
    logoCircle: {
      position: 'absolute',
      border: '3px solid rgba(255,255,255,0.3)',
      borderRadius: '50%',
      animation: 'rotate 3s linear infinite'
    },
    circle1: {
      width: '120px',
      height: '120px',
      top: 0,
      left: 0,
      borderTopColor: '#ff6b6b'
    },
    circle2: {
      width: '90px',
      height: '90px',
      top: '15px',
      left: '15px',
      borderRightColor: '#ffa500',
      animationDelay: '-1s'
    },
    circle3: {
      width: '60px',
      height: '60px',
      top: '30px',
      left: '30px',
      borderBottomColor: '#fff',
      animationDelay: '-2s'
    },
    logoCenter: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '50px',
      height: '50px',
      background: 'linear-gradient(45deg, #ff6b6b, #ffa500)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '2rem',
      fontWeight: 'bold',
      color: 'white',
      boxShadow: '0 10px 30px rgba(255,107,107,0.5)'
    },
    loadingTitle: {
      fontSize: '2.5rem',
      fontWeight: '800',
      marginBottom: '2rem',
      color: 'white'
    },
    gradientText: {
      background: 'linear-gradient(45deg, #ff6b6b, #ffa500)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    loadingBarContainer: {
      marginBottom: '1.5rem'
    },
    loadingBar: {
      width: '400px',
      maxWidth: '90vw',
      height: '8px',
      background: 'rgba(255,255,255,0.2)',
      borderRadius: '10px',
      overflow: 'hidden',
      margin: '0 auto 0.5rem',
      position: 'relative'
    },
    loadingBarFill: {
      height: '100%',
      background: 'linear-gradient(90deg, #ff6b6b, #ffa500)',
      borderRadius: '10px',
      transition: 'width 0.3s ease',
      position: 'relative',
      boxShadow: '0 0 20px rgba(255,107,107,0.6)'
    },
    loadingPercentage: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      color: '#ffa500'
    },
    loadingTextContainer: {
      fontSize: '1.2rem',
      marginBottom: '2rem',
      opacity: 0.9,
      minHeight: '30px'
    },
    loadingFeatures: {
      display: 'flex',
      gap: '3rem',
      justifyContent: 'center',
      marginTop: '3rem'
    },
    featureItem: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.5rem'
    },
    featureIcon: {
      fontSize: '2rem',
      animation: 'bounce 2s ease-in-out infinite'
    }
  };

  return (
    <div style={styles.loadingPage}>
      <style>
        {`
          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          
          @keyframes dots {
            0%, 20% { content: '.'; }
            40% { content: '..'; }
            60%, 100% { content: '...'; }
          }
          
          .loading-dots::after {
            content: '...';
            animation: dots 1.5s steps(3) infinite;
          }
        `}
      </style>

      <div style={styles.loadingContent}>
        <div style={styles.logoContainer}>
          <div style={styles.loadingLogo}>
            <div style={{...styles.logoCircle, ...styles.circle1}}></div>
            <div style={{...styles.logoCircle, ...styles.circle2}}></div>
            <div style={{...styles.logoCircle, ...styles.circle3}}></div>
            <div style={styles.logoCenter}>
              <span>L</span>
            </div>
          </div>
        </div>

        <h1 style={styles.loadingTitle}>
          {heading}
        </h1>

        <div style={styles.loadingBarContainer}>
          <div style={styles.loadingBar}>
            <div 
              style={{
                ...styles.loadingBarFill,
                width: `${progress}%`
              }}
            ></div>
          </div>
          <div style={styles.loadingPercentage}>{progress}%</div>
        </div>

        <p style={styles.loadingTextContainer}>
          {loadingText}<span className="loading-dots"></span>
        </p>

        <div style={styles.loadingFeatures}>
          <div style={styles.featureItem}>
            <div style={{...styles.featureIcon, animationDelay: '0s'}}>⚡</div>
            <span>Fast</span>
          </div>
          <div style={styles.featureItem}>
            <div style={{...styles.featureIcon, animationDelay: '0.2s'}}>🎨</div>
            <span>Beautiful</span>
          </div>
          <div style={styles.featureItem}>
            <div style={{...styles.featureIcon, animationDelay: '0.4s'}}>🚀</div>
            <span>Powerful</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;