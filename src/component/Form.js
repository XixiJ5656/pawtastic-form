import React from "react";

const PuppuyForm = () => {
  return (
    <form>
      <div>
        <input name="name" type="text" placeholder="Pet's Name" />
      </div>

      <div>
        <input name="breed" type="text" placeholder="Pet's breed" />
      </div>

      <div>
        <label>
          <input name="gender" type="radio" value="male" />
          Male
        </label>
        <label>
          <input name="gender" type="radio" value="female" />
          Female
        </label>
      </div>

      <div>
        <input name="Weight" component="select">
          <option>--chose the pet's weight</option>
          <option value="0-25">0-25lbs</option>
          <option value="25-50">25-50lbs</option>
          <option value="50-100">50-100</option>
          <option value="100+">100+</option>
        </input>
      </div>

      <div>
        <button>Back</button>
        <button>Next</button>
      </div>
    </form>
  );
};

export default PuppuyForm;
