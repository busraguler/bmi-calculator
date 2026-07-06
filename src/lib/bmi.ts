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
    label: "Zayıf",
    message:
      "Sağlıklı kilo aralığına ulaşmak için dengeli ve yeterli beslenme desteği faydalı olabilir.",
  },
  healthy: {
    label: "Normal Kilolu",
    message:
      "BMI değeriniz normal aralıktadır. Dengeli beslenme ve düzenli hareket alışkanlıklarınızı sürdürün.",
  },
  overweight: {
    label: "Fazla Kilolu",
    message:
      "Küçük ve sürdürülebilir yaşam tarzı değişiklikleri sağlıklı aralığa yaklaşmanıza yardımcı olabilir.",
  },
  obesity: {
    label: "Obez",
    message:
      "Sağlığınızı desteklemek için kişiye özel değerlendirme ve beslenme planı konusunda uzman desteği almanız önerilir.",
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
