// Import the Card component from components folder
import Card from "./components/Card";

const App = () => {
  return (
    <div className="parent">
      {/* 
        PROPS EXPLANATION:
        - Props are passed like HTML attributes
        - Each Card component receives different data through props
        - This makes components reusable with different data
      */}

      {/* First Card - passing all custom props */}
      <Card
        name="Satyapradip"
        description="Hi, this is Satyapradip, I am fullstack webdeveloper, currently I am learning react.js for frontend mastery."
        image="https://images.unsplash.com/photo-1707061229218-c7611e720882?q=80&w=880&auto=format&fit=crop"
        buttonText="View My Profile"
      />

      {/* Second Card - different props, different data */}
      <Card
        name="Aman"
        description="Hello! I'm Aman, a backend developer specializing in Node.js and databases."
        image="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&auto=format&fit=crop"
        buttonText="Connect"
      />

      {/* Third Card - showing some props, others will use default values */}
      <Card
        name="Priya"
        description="Frontend enthusiast passionate about creating beautiful user interfaces."
      />

      {/* Fourth Card - no props passed, will use all default values from Card component */}
      <Card />
    </div>
  );
};

export default App;
