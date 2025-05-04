import { useState, useEffect } from 'react';

// Custom hook to check screen size and return responsive values
export const useResponsive = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  
  const [breakpoint, setBreakpoint] = useState({
    isMobile: window.innerWidth < 768,
    isTablet: window.innerWidth >= 768 && window.innerWidth < 1024,
    isDesktop: window.innerWidth >= 1024,
  });

  useEffect(() => {
    // Function to update window size
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setWindowSize({ width, height });
      setBreakpoint({
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024,
      });
    };

    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures effect is only run on mount and unmount

  return {
    width: windowSize.width,
    height: windowSize.height,
    isMobile: breakpoint.isMobile,
    isTablet: breakpoint.isTablet, 
    isDesktop: breakpoint.isDesktop,
    // Helper functions to generate responsive values
    responsiveValue: (mobileValue, tabletValue, desktopValue) => {
      if (breakpoint.isMobile) return mobileValue;
      if (breakpoint.isTablet) return tabletValue;
      return desktopValue;
    }
  };
};

// CSS media query strings
export const mediaQueries = {
  mobile: '@media (max-width: 767px)',
  tablet: '@media (min-width: 768px) and (max-width: 1023px)',
  desktop: '@media (min-width: 1024px)',
};

// Common responsive styles
export const responsiveStyles = {
  // Sample responsive padding
  padding: {
    mobile: '12px',
    tablet: '16px 24px',
    desktop: '20px 40px',
  },
  
  // Sample responsive margins
  margin: {
    mobile: '10px',
    tablet: '16px',
    desktop: '24px',
  },
  
  // Sample responsive font sizes
  fontSize: {
    small: {
      mobile: '12px',
      tablet: '13px',
      desktop: '14px',
    },
    medium: {
      mobile: '14px',
      tablet: '16px',
      desktop: '18px',
    },
    large: {
      mobile: '18px',
      tablet: '22px',
      desktop: '24px',
    },
    xlarge: {
      mobile: '24px',
      tablet: '28px',
      desktop: '32px',
    },
  },
  
  // Sample grid layouts
  grid: {
    columns: {
      mobile: 'repeat(1, 1fr)',
      tablet: 'repeat(2, 1fr)',
      desktop: 'repeat(auto-fill, minmax(280px, 1fr))',
    },
    gap: {
      mobile: '16px',
      tablet: '20px',
      desktop: '24px',
    },
  },
  
  // Container width
  containerWidth: {
    mobile: '100%',
    tablet: '100%',
    desktop: '1280px',
  },
};

// Helper function to create CSS string for media queries
export const createResponsiveCSS = () => {
  return `
    /* Mobile first responsive styles */
    ${mediaQueries.mobile} {
      .container {
        padding: ${responsiveStyles.padding.mobile};
        max-width: ${responsiveStyles.containerWidth.mobile};
      }
      
      .grid {
        display: grid;
        grid-template-columns: ${responsiveStyles.grid.columns.mobile};
        gap: ${responsiveStyles.grid.gap.mobile};
      }
      
      .text-small {
        font-size: ${responsiveStyles.fontSize.small.mobile};
      }
      
      .text-medium {
        font-size: ${responsiveStyles.fontSize.medium.mobile};
      }
      
      .text-large {
        font-size: ${responsiveStyles.fontSize.large.mobile};
      }
      
      .text-xlarge {
        font-size: ${responsiveStyles.fontSize.xlarge.mobile};
      }
      
      /* Hide desktop elements on mobile */
      .desktop-only {
        display: none !important;
      }
    }
    
    /* Tablet styles */
    ${mediaQueries.tablet} {
      .container {
        padding: ${responsiveStyles.padding.tablet};
        max-width: ${responsiveStyles.containerWidth.tablet};
      }
      
      .grid {
        grid-template-columns: ${responsiveStyles.grid.columns.tablet};
        gap: ${responsiveStyles.grid.gap.tablet};
      }
      
      .text-small {
        font-size: ${responsiveStyles.fontSize.small.tablet};
      }
      
      .text-medium {
        font-size: ${responsiveStyles.fontSize.medium.tablet};
      }
      
      .text-large {
        font-size: ${responsiveStyles.fontSize.large.tablet};
      }
      
      .text-xlarge {
        font-size: ${responsiveStyles.fontSize.xlarge.tablet};
      }
      
      /* Hide mobile elements on tablet */
      .mobile-only {
        display: none !important;
      }
    }
    
    /* Desktop styles */
    ${mediaQueries.desktop} {
      .container {
        padding: ${responsiveStyles.padding.desktop};
        max-width: ${responsiveStyles.containerWidth.desktop};
        margin: 0 auto;
      }
      
      .grid {
        grid-template-columns: ${responsiveStyles.grid.columns.desktop};
        gap: ${responsiveStyles.grid.gap.desktop};
      }
      
      .text-small {
        font-size: ${responsiveStyles.fontSize.small.desktop};
      }
      
      .text-medium {
        font-size: ${responsiveStyles.fontSize.medium.desktop};
      }
      
      .text-large {
        font-size: ${responsiveStyles.fontSize.large.desktop};
      }
      
      .text-xlarge {
        font-size: ${responsiveStyles.fontSize.xlarge.desktop};
      }
      
      /* Hide tablet/mobile elements on desktop */
      .mobile-only, .tablet-only {
        display: none !important;
      }
    }
  `;
};

export default useResponsive; 