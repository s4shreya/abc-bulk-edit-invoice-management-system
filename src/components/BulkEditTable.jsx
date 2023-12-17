import styles from './BulkEditTable.module.css';

const BulkEditTable = (props) => {
  const invoices = [{
    no: 1,

  }];

  return (
    <div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Invoice No.</th>
            <th>Bill To</th>
            <th>Due date</th>
            <th>Bill From</th>
            <th>Total Items</th>
            <th>Discount</th>
            <th>Tax</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice.id}>
              <td>{invoice.no}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          ))}
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
};

export default BulkEditTable;
