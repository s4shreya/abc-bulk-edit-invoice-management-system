import BulkEditTable from "../components/BulkEditTable";
import styles from './BulkEdit.module.css';

const BulkEdit = () => {
  return (
    <div>
        <h2 className={styles.heading}>Bulk Edit Invoices</h2>
        <BulkEditTable /></div>
  )
}
export default BulkEdit