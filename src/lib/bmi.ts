export type BmiCategory =
  | "underweight"
  | "healthy"
  | "overweight"
  | "obesity";

export type BmiResult = {
  value: number;
  category: BmiCategory;
  label: string;
  message: string;
};

const CATEGORY_DETAILS: Record<
  BmiCategory,
  Pick<BmiResult, "label" | "message">
> = {
  underweight: {
    label: "Underweight",
    message: "A little more nourishment may help you reach a healthier range.",
  },
  healthy: {
    label: "Healthy range",
    message: "Your BMI is in the generally healthy range. Keep up your balanced habits.",
  },
  overweight: {
    label: "Overweight",
    message: "Small, consistent changes can support movement toward a healthier range.",
  },
  obesity: {
    label: "Obesity range",
    message: "Consider speaking with a healthcare professional for personal guidance.",
  },
};

function getCategory(value: number): BmiCategory {
  if (value < 18.5) return "underweight";
  if (value < 25) return "healthy";
  if (value < 30) return "overweight";
  return "obesity";
}

export function calculateBmi(heightCm: number, weightKg: number): BmiResult {
  const heightM = heightCm / 100;
  const value = weightKg / heightM ** 2;
  const category = getCategory(value);

  return {
    value,
    category,
    ...CATEGORY_DETAILS[category],
  };
}
