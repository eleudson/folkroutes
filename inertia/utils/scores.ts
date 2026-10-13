export interface ScoreOption {
  label: string
  color: string
  bg: string
}

export const SCORE_MAP: Record<number, ScoreOption> = {
  0: { label: 'Baixa / Mínima', color: '#047857', bg: '#d1fae5' },
  1: { label: 'Média / Moderada', color: '#b45309', bg: '#fef3c7' },
  2: { label: 'Alta / Elevada', color: '#b91c1c', bg: '#fee2e2' },
}

export const SCORE_LABELS: Record<string, string> = {
  scoreInfluenceOfTheClimate: 'Influência do Clima',
  scorePhysicalExertion: 'Esforço Físico Exigido',
  scoreSecurity: 'Nível de Segurança',
  scoreConveniences: 'Conveniências e Estrutura',
  scoreDifficultyOfAccess: 'Dificuldade de Acesso',
  scoreInterpretiveDiversity: 'Diversidade Interpretativa',
}

export interface AttractionScores {
  scoreInfluenceOfTheClimate: number
  scorePhysicalExertion: number
  scoreSecurity: number
  scoreConveniences: number
  scoreDifficultyOfAccess: number
  scoreInterpretiveDiversity: number
}

export function calculateTourismMetrics(scores: AttractionScores) {
  const sum =
    (scores.scoreInfluenceOfTheClimate || 0) +
    (scores.scorePhysicalExertion || 0) +
    (scores.scoreSecurity || 0) +
    (scores.scoreConveniences || 0) +
    (scores.scoreDifficultyOfAccess || 0) +
    (scores.scoreInterpretiveDiversity || 0)

  const average = sum / 6

  if (average <= 0.66) {
    return {
      average: average.toFixed(2),
      incidence: 'Baixa Incidência',
      vocation: 'Alta Vocação',
      badgeBg: '#d1fae5',
      badgeColor: '#047857',
      borderColor: '#10b981',
    }
  } else if (average <= 1.34) {
    return {
      average: average.toFixed(2),
      incidence: 'Média Incidência',
      vocation: 'Média Vocação',
      badgeBg: '#fef3c7',
      badgeColor: '#b45309',
      borderColor: '#f59e0b',
    }
  } else {
    return {
      average: average.toFixed(2),
      incidence: 'Alta Incidência',
      vocation: 'Baixa Vocação',
      badgeBg: '#fee2e2',
      badgeColor: '#b91c1c',
      borderColor: '#ef4444',
    }
  }
}
