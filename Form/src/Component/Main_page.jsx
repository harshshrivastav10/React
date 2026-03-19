import { useState } from 'react';
import { createRoot } from 'react-dom/client';

function MyForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState();
  const [course, setCourse] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handleAge(e) {
    setAge(e.target.value);
  }

  function handleCourse(e) {
    setCourse(e.target.value);
  }

  return (
    <>
        <div className="flex h-screen items-left justify-center m-2">
            <div>
                <h1 className='text-center text-2xl font-bold'>Basic form</h1>
                <br />
                <form className=' border-2 p-4'>
                <label>Enter your name:
                <input className=' border-2'
                type="text" 
                value={name}
                onChange={handleChange}
                />
                </label>
                <p>Current value: {name}</p>
                <br />

                <label>Enter your age:
                <input className=' border-2'
                type="text" 
                value={age}
                onChange={handleAge}
                />
                </label>
                <p>Current value: {age}</p>

                <br />


                <label>Enter your course:
                <input className=' border-2'
                type="text" 
                value={course}
                onChange={handleCourse}
                />
                </label>
                <p>Current value: {course}</p>

                <br />
                <label>Enter your email:
                <input className=' border-2'
                type="email" 
                value={email}
                onChange={handleEmail}
                />
                </label>
                <p>Current value: {email}</p>
                <br />

                <button type="submit" className='border-2 p-2 rounded-sm'>Submit</button>
                </form>
            </div>
        </div>
    </>
  )
}

export default MyForm;