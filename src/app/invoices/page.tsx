import { createInvoices } from "@/data/invoices";
import { format } from "date-fns";

export default function Page() {
  const invoices = createInvoices(15);
  return (
    <table className="table-auto border-collapse ">
      <thead>
        <tr>
          <th className="p-4">Due Date</th>
          <th className="p-4">Description</th>
          <th className="p-4">Current Amount</th>
          <th className="p-4">Previous Amount</th>
          <th className="p-4"> Payment Date</th>
        </tr>
      </thead>
      <tbody>
        {invoices.map((invoice) => {
          return (
            <tr key={invoice.id}>
              <td className="p-4">{format(invoice.dueDate, "PPP")}</td>
              <td className="p-4">{invoice.description}</td>
              <td className="p-4 text-center">{invoice.currentAmount}</td>
              <td className="p-4 text-center">{invoice.previousAmount}</td>
              <td className="p-4">{format(invoice.paymentDate, "PPP")}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
