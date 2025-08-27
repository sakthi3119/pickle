import { useState } from 'react';
import { FiPlus, FiTrash2 } from 'react-icons/fi';

const initialCoupons = [
  { code: 'PICKLE10', discount: 10, count: 100, active: true, start: '', end: '' },
  { code: 'PICKLE20', discount: 20, count: 50, active: false, start: '', end: '' },
];

const CouponManagementPage = () => {
  const [coupons, setCoupons] = useState(initialCoupons);
  const [code, setCode] = useState('');
  const [discount, setDiscount] = useState('');
  const [count, setCount] = useState('');
  const [active, setActive] = useState(true);
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [error, setError] = useState('');

  const handleAddCoupon = (e) => {
    e.preventDefault();
    const trimmedCode = code.trim().toUpperCase();
    const discountValue = parseInt(discount, 10);
    const countValue = parseInt(count, 10);
    if (!trimmedCode || isNaN(discountValue) || discountValue <= 0 || discountValue > 100 || isNaN(countValue) || countValue < 1) {
      setError('Enter a valid code, discount (1-100), and count (>=1)');
      return;
    }
    if (start && end && new Date(end) < new Date(start)) {
      setError('End date must be after start date');
      return;
    }
    if (coupons.some(c => c.code === trimmedCode)) {
      setError('Coupon code already exists');
      return;
    }
    setCoupons([
      ...coupons,
      { code: trimmedCode, discount: discountValue, count: countValue, active, start, end }
    ]);
    setCode('');
    setDiscount('');
    setCount('');
    setActive(true);
    setStart('');
    setEnd('');
    setError('');
  };

  const handleDelete = (code) => {
    setCoupons(coupons.filter(c => c.code !== code));
  };

  const handleCountChange = (code, newCount) => {
    if (isNaN(newCount) || newCount < 1) return;
    setCoupons(coupons.map(c => c.code === code ? { ...c, count: newCount } : c));
  };

  const handleToggleActive = (code) => {
    setCoupons(coupons.map(c => c.code === code ? { ...c, active: !c.active } : c));
  };

  const handleScheduleChange = (code, field, value) => {
    setCoupons(coupons.map(c => c.code === code ? { ...c, [field]: value } : c));
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Coupon Management</h1>
        <p className="text-gray-600">Create and manage discount coupons for your customers</p>
      </div>

      {/* Add Coupon Form */}
      <div className="card p-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Add New Coupon</h2>
        <form onSubmit={handleAddCoupon} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Coupon Code</label>
            <input
              type="text"
              value={code}
              onChange={e => setCode(e.target.value)}
              placeholder="PICKLE10"
              className="input-field"
              maxLength={20}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Discount %</label>
            <input
              type="number"
              value={discount}
              onChange={e => setDiscount(e.target.value)}
              placeholder="10"
              className="input-field"
              min={1}
              max={100}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Count</label>
            <input
              type="number"
              value={count}
              onChange={e => setCount(e.target.value)}
              placeholder="100"
              className="input-field"
              min={1}
            />
          </div>
          <div className="flex items-end">
            <button
              type="submit"
              className="btn-primary flex items-center gap-2 w-full"
            >
              <FiPlus className="w-4 h-4" />
              Add Coupon
            </button>
          </div>
        </form>
        {error && <div className="text-red-600 mt-4">{error}</div>}
      </div>

      {/* Coupons Table */}
      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Code
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Discount (%)
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Count
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Active
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Start Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  End Date
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {coupons.map(coupon => (
                <tr key={coupon.code} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="font-mono text-lg font-medium text-gray-900">{coupon.code}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {coupon.discount}%
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="number"
                      value={coupon.count}
                      min={1}
                      className="input-field w-24"
                      onChange={e => handleCountChange(coupon.code, parseInt(e.target.value, 10))}
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="checkbox"
                      checked={coupon.active}
                      onChange={() => handleToggleActive(coupon.code)}
                      className="rounded border-gray-300 text-pickle-600 focus:ring-pickle-500"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="date"
                      value={coupon.start}
                      onChange={e => handleScheduleChange(coupon.code, 'start', e.target.value)}
                      className="input-field w-32"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <input
                      type="date"
                      value={coupon.end}
                      onChange={e => handleScheduleChange(coupon.code, 'end', e.target.value)}
                      className="input-field w-32"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => handleDelete(coupon.code)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <FiTrash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
              {coupons.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-6 py-4 text-center text-gray-500">
                    No coupons available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CouponManagementPage;
