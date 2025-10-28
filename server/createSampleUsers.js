const mongoose = require('mongoose');
const User = require('./models/User');
require('dotenv').config();

const createSampleUsers = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/friendrecommend');
    console.log('Connected to MongoDB');

    // Clear existing users
    console.log('Clearing existing users...');
    await User.deleteMany({});
    console.log('Existing users cleared.');
    
    // Create sample users
    const sampleUsers = [
      {
        name: 'Komal Patil',
        email: 'komalgpatil0904@gmail.com',
        password: 'kgp0904',
        bio: 'Software developer passionate about coding and technology',
        profilePic: 'https://images.unsplash.com/photo-1573800389149-500d62e9bdd5?w=400&h=400&fit=crop',
        location: 'Nashik, USA',
        college: 'MET Bhujbal Knowledge City',
        interests: [ 'Music', 'Travel', 'Photography','Reading']
      },
      {
        name: 'Prachi Dhole',
        email: 'prachidhole0904@gmail.com',
        password: 'pad0904',
        bio: 'Digital artist and designer, love creating beautiful things',
        profilePic: 'https://images.unsplash.com/photo-1538370965046-79c0d6907d47?w=400&h=400&fit=crop',
        location: 'Pune, India',
        college: 'Pune University',
        interests: ['Art', 'Design', 'Music', 'Coffee']
      },
      {
        name: 'Tejas Patil',
        email: 'tejaspatil0904@gmail.com',
        password: 'tp0904',
        bio: 'Entrepreneur and startup enthusiast',
        profilePic: 'https://images.unsplash.com/photo-1519068737630-e5db30e479e8?w=400&h=400&fit=crop',
        location: 'Mumbai, India',
        college: 'Veermata Jijabai Technological Institute',
        interests: ['Business', 'Travel', 'Sports', 'Fitness']
      },
      {
        name: 'Suhani Goyal',
        email: 'suhanigoyal0904@gmail.com',
        password: 'sg0904',
        bio: 'Bookworm and coffee addict, love reading and writing',
        profilePic: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=400&fit=crop',
        location: 'Pune, India',
        college: 'Atal Bihari Vajypee Medical College',
        interests: ['Reading', 'Writing', 'Coffee', 'Photography']
      },
      {
        name: 'Akshat Jain',
        email: 'akshatjain0904@gmail.com',
        password: 'aj0904',
        bio: 'Data scientist and machine learning enthusiast',
        profilePic: 'https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?w=400&h=400&fit=crop',
        location: 'Mumbai, India',
        college: 'Veermata Jijabai Technological Institute',
        interests: ['Coding', 'AI', 'Tech', 'Science']
      },
      {
        name: 'Yasha kavale',
        email: 'yashakavale0904@gmail.com',
        password: 'yk0904',
        bio: 'Yoga instructor and wellness coach',
        profilePic: 'https://images.unsplash.com/photo-1551966785-a2769537d515?w=400&h=400&fit=crop',
        location: 'Nagpur, India',
        college: 'Nagpur University',
        interests: ['Fitness', 'Yoga', 'Health', 'Travel']
      },
      {
        name: 'Kavya Patel',
        email: 'kavyapatel0904@gmail.com',
        password: 'kp0904',
        bio: 'Photographer capturing the world one click at a time',
        profilePic: 'https://images.unsplash.com/photo-1578292092345-967f4770eac0?w=400&h=400&fit=crop',
        location: 'Delhi, India',
        college: 'Delhi University',
        interests: ['Photography', 'Art', 'Travel', 'Music']
      },
      {
        name: 'Alex Gordan',
        email: 'alexgordan0904@gmail.com',
        password: 'ag0904',
        bio: 'Chef and food blogger sharing delicious recipes',
        profilePic: 'https://images.unsplash.com/photo-1530044702134-fb72deb2b3ce?w=400&h=400&fit=crop',
        location: 'Mumbai, India',
        college: 'Culinary Institute',
        interests: ['Cooking', 'Food', 'Travel', 'Culture']
      },
      {
        name: 'James Wilson',
        email: 'james@example.com',
        password: 'password123',
        bio: 'Musician and songwriter, love creating melodies',
        profilePic: 'https://images.unsplash.com/photo-1576790419752-0167a3e3b6dc?w=400&h=400&fit=crop',
        location: 'Los Angeles, USA',
        college: 'Berklee',
        interests: ['Music', 'Instruments', 'Concerts', 'Art']
      },
      {
        name: 'Sophia Kim',
        email: 'sophia@example.com',
        password: 'password123',
        bio: 'Gaming enthusiast and streamer',
        profilePic: 'https://images.unsplash.com/photo-1596854307802-26f9c2cba8a5?w=400&h=400&fit=crop',
        location: 'Seoul, South Korea',
        college: 'Seoul University',
        interests: ['Gaming', 'Tech', 'Esports', 'Music']
      }
    ];

    // Create users
    let created = 0;
    for (const userData of sampleUsers) {
      try {
        const existingUser = await User.findOne({ email: userData.email });
        if (existingUser) {
          console.log(`User ${userData.name} already exists. Skipping.`);
          continue;
        }
        const user = new User(userData);
        await user.save();
        console.log(`Created user: ${user.name}`);
        created++;
      } catch (error) {
        console.log(`Skipped ${userData.name}: ${error.message}`);
      }
    }

    console.log(`\n✅ Created ${created} new users!`);
    console.log('\nYou can now login with any of these accounts:');
    console.log('Email: komalgpatil0904@gmail.com');
    console.log('Password: kgp0904');
    
    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error('Error creating sample users:', error);
    process.exit(1);
  }
};

createSampleUsers();

