import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Comments({ post }) {
  const [text, setText] = useState('');
  const [items, setItems] = useState(post.comments || []);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setItems(post.comments || []);
  }, [post]);

  const addComment = async () => {
    if (!text.trim()) return;
    setLoading(true);
    try {
      const res = await axios.post(`/api/posts/${post._id}/comments`, { text });
      setItems(res.data.comments || []);
      setText('');
    } catch (e) {
      // noop
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-4">
      <div className="flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write a comment..."
          className="flex-1 px-3 py-2 border rounded-lg"
        />
        <button onClick={addComment} disabled={loading} className="bg-gray-800 text-white px-4 rounded-lg">
          {loading ? '...' : 'Post'}
        </button>
      </div>
      <div className="mt-3 space-y-2">
        {items.map(c => (
          <div key={c._id} className="flex items-start gap-2">
            <img src={c.user?.profilePic} alt="" className="w-6 h-6 rounded-full object-cover" />
            <div>
              <div className="text-sm font-semibold">{c.user?.name || 'User'}</div>
              <div className="text-sm text-gray-700">{c.text}</div>
            </div>
          </div>
        ))}
        {items.length === 0 && (
          <div className="text-sm text-gray-500">No comments yet.</div>
        )}
      </div>
    </div>
  );
}


