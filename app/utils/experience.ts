/**
 * Calculate years and months of experience from a start date
 * @param startDate - The start date of career (e.g., '2018-12')
 * @returns Object containing years, months, and formatted string
 */
export function calculateExperience(startDate: string) {
  const start = new Date(startDate);
  const now = new Date();

  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();

  // Adjust if months is negative
  if (months < 0) {
    years--;
    months += 12;
  }

  return {
    years,
    months,
    formatted: `${years}+ Years`,
    detailed: months > 0 ? `${years} Years ${months} Months` : `${years} Years`,
    shortForm: `${years}+ years`,
  };
}

// Career start date: December 2018
export const CAREER_START_DATE = '2018-12-01';

// Get current experience
export const getExperience = () => calculateExperience(CAREER_START_DATE);
