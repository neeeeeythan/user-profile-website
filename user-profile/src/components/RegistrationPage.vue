<template>
  <section id="registration">
    <div class="row">
      <div class="col">
        <h2>Registration Page</h2>
          <form @submit.prevent="submitForm">
            <div class="fields">
              <label for="username">Username:</label>
              <input type="text" id="username" v-model="formData.username" required>
            </div>
            <div class="fields">
              <label for="email">Email:</label>
              <input type="email" id="email" v-model="formData.email" required>
            </div>
            <div class="fields">
              <label for="password">Password:</label>
              <input type="password" id="password" v-model="formData.password" required>
            </div>
            <div class="fields">
              <label for="profile-image">Profile Image:</label>
              <input type="file" id="profile-image" @change="handleImageUpload" accept="image/*">
            </div>              
            <button type="submit">Register</button>
          </form> 
      </div>
    </div>

    <div class="row">
      <div class="col">
        <h2>Submitted Data</h2>
        <ul>
          <li v-for="(data, index) in submittedData" :key="index">
            <strong>Username:</strong> {{ data.username }}<br>
            <strong>Email:</strong> {{ data.email }}<br>
            <strong>Password:</strong> {{ data.password }}<br>
            <strong>Profile Image:</strong> {{ data.profileImage ? 'Uploaded' : 'Not uploaded' }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'RegistrationPage',
  data() {
    return {
      formData: {
        username: '',
        email: '',
        password: '',
        profileImage: null
      },
      submittedData: []
    };
  },
  methods: {
    submitForm() {
      this.submittedData.push({ ...this.formData });
      
      this.formData = {
        username: '',
        email: '',
        password: '',
        profileImage: null
      };
    },
    handleImageUpload(event) {
      const file = event.target.files[0];
      this.formData.profileImage = file;
    }
  }
};
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  </style>
  