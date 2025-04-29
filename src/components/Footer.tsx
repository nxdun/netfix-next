export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 section-padding">
      {/* ! Contact link */}
      <p className="mb-6 text-sm">Questions? <a href="#" className="underline">Contact us.</a></p>
      {/* 🔥 Footer links */}
      <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm mb-8">
        <li><a href="#" className="hover:underline">FAQ</a></li>
        <li><a href="#" className="hover:underline">Investor Relations</a></li>
        <li><a href="#" className="hover:underline">Privacy</a></li>
        <li><a href="#" className="hover:underline">Speed Test</a></li>
        <li><a href="#" className="hover:underline">Help Center</a></li>
        <li><a href="#" className="hover:underline">Jobs</a></li>
        <li><a href="#" className="hover:underline">Cookie Preferences</a></li>
        <li><a href="#" className="hover:underline">Legal Notices</a></li>
        <li><a href="#" className="hover:underline">Account</a></li>
        <li><a href="#" className="hover:underline">Ways to Watch</a></li>
        <li><a href="#" className="hover:underline">Corporate Information</a></li>
        <li><a href="#" className="hover:underline">Only on Netflix</a></li>
      </ul>
      {/* 🔥 Language selector */}
      <div className="mb-6">
        <select
          className="bg-black border border-gray-400 text-gray-400 text-sm p-2 rounded"
          defaultValue="en"
        >
          <option value="en">English</option>
        </select>
      </div>
      {/* ! Footer branding */}
      <p className="text-sm">Netflix Sri Lanka</p>
    </footer>
  );
}
