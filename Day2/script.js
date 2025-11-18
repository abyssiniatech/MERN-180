let students = JSON.parse(localStorage.getItem("students")) || [];
        let editIndex = -1;

        function showStudents() {
            const table = document.getElementById("tableBody");
            table.innerHTML = "";

            students.forEach((student, index) => {
                table.innerHTML += `
                    <tr>
                        <td>${student.name}</td>
                        <td>${student.age}</td>
                        <td>${student.grade}</td>
                        <td>${student.gender}</td>
                        <td>
                            <button class="edit-btn" onclick="editStudent(${index})">Edit</button>
                            <button class="delete-btn" onclick="deleteStudent(${index})">Delete</button>
                        </td>
                    </tr>
                `;
            });
        }

        function addStudent() {
            const name = document.getElementById("name").value;
            const age = document.getElementById("age").value;
            const grade = document.getElementById("grade").value;
            const gender = document.getElementById("gender").value;

            if (!name || !age || !grade || !gender) {
                alert("Please fill in all fields!");
                return;
            }

            const studentData = { name, age, grade, gender };

            if (editIndex === -1) {
                students.push(studentData);
            } else {
                students[editIndex] = studentData;
                editIndex = -1;
            }

            localStorage.setItem("students", JSON.stringify(students));
            clearForm();
            showStudents();
        }

        function editStudent(index) {
            const student = students[index];
            document.getElementById("name").value = student.name;
            document.getElementById("age").value = student.age;
            document.getElementById("grade").value = student.grade;
            document.getElementById("gender").value = student.gender;

            editIndex = index;
        }

        function deleteStudent(index) {
            if (confirm("Are you sure you want to delete this student?")) {
                students.splice(index, 1);
                localStorage.setItem("students", JSON.stringify(students));
                showStudents();
            }
        }

        function clearForm() {
            document.getElementById("name").value = "";
            document.getElementById("age").value = "";
            document.getElementById("grade").value = "";
            document.getElementById("gender").value = "";
        }

        showStudents();