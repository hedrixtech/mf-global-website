import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Button from '../components/Button';

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="backdrop-blur-sm bg-purple-900/20 rounded-xl p-8 shadow-lg border border-purple-500/20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-200">
            مرحباً بك في عالم Majestic Flux
          </h2>
          <p className="text-xl text-purple-100 mb-8 leading-relaxed">
            اكتشف قوة البوت السحري الذي سيرتقي بتجربة سيرفر الديسكورد الخاص بك إلى مستوى جديد كلياً
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <Link to="/plans">
              <Button primary>اشترك الآن</Button>
            </Link>
            <Link to="/plans">
              <Button>جرب مجانا</Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;