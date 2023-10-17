import { faker } from "@faker-js/faker";

interface Invoice {
  id: string;
  dueDate: Date;
  description: string;
  currentAmount: number;
  previousAmount: number;
  paymentDate: Date;
}

export function createInvoice(): Invoice {
  return {
    id: faker.string.uuid(),
    dueDate: faker.date.future(),
    description: faker.lorem.sentence(),
    currentAmount: parseInt(
      faker.finance.amount({ min: 5, max: 1000, dec: 0 })
    ),
    previousAmount: parseInt(
      faker.finance.amount({ min: 5, max: 1000, dec: 0 })
    ),
    paymentDate: faker.date.future(),
  };
}

export function createInvoices(count: number) {
  const invoices = [];
  for (let i = 0; i < count; i = i + 1) {
    invoices.push(createInvoice());
  }
  return invoices;
}
