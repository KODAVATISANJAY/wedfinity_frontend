import React, { useState } from 'react';

const PlanningChecklist = () => {
  const [items, setItems] = useState([
    { id: 1, text: 'Choose Venue', done: false },
    { id: 2, text: 'Book Caterer', done: false },
    { id: 3, text: 'Hire Photographer', done: false },
    { id: 4, text: 'Send Invitations', done: false },
    { id: 5, text: 'Plan Decorations', done: false },
    { id: 6, text: 'Arrange Entertainment', done: false }
  ]);

  const toggle = (id) => setItems(items.map(i => i.id === id ? {...i, done: !i.done} : i));

  return (
    <section className="max-w-4xl mx-auto py-20 px-4">
      <h2 className="text-4xl font-bold text-blue-900 mb-4">Wedding Planning Checklist</h2>
      <p className="text-gray-600 mb-8">Keep track of your wedding preparation tasks</p>
      <div className="space-y-3">
        {items.map(item => (
          <div key={item.id} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition">
            <input type="checkbox" checked={item.done} onChange={() => toggle(item.id)} className="w-6 h-6 accent-blue-500 cursor-pointer" />
            <span className={item.done ? 'line-through text-gray-400 text-lg' : 'text-gray-800 text-lg font-medium'}>{item.text}</span>
          </div>
        ))}
      </div>
      <p className="text-center text-blue-600 mt-8">Completed: {items.filter(i => i.done).length} of {items.length}</p>
    </section>
  );
};
export default PlanningChecklist;
