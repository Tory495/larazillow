import { computed, isRef } from 'vue'

export const useMonthlyPayment = (total, interestRate, duration) => {
  const monthsInYear = 12

  const monthlyPayment = computed(() => {
    const principle = isRef(total) ? total.value : total,
      monthlyInterest = (isRef(interestRate) ? interestRate.value : interestRate) / 100 / monthsInYear,
      numberOfPaymentMonths = isRef(duration) ? duration.value : duration * monthsInYear

    return (
      (principle *
        monthlyInterest *
        Math.pow(1 + monthlyInterest, numberOfPaymentMonths)) /
      (Math.pow(1 + monthlyInterest, numberOfPaymentMonths) - 1)
    )
  })

  const totalPaid = computed(() => monthlyPayment.value * (isRef(duration) ? duration.value : duration) * monthsInYear)

  const totalInterest = computed(() => totalPaid.value - (isRef(total) ? total.value : total))

  return {
    monthlyPayment,
    totalPaid,
    totalInterest,
  }
}