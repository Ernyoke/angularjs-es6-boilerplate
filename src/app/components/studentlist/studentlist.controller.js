class StudentListController {
    constructor(studentApiService) {
        'ngInject';

        this.studentApiService = studentApiService;
        this.students = [];
        this.name = 'studentlist';
    }

    $onInit() {
        this.studentApiService.getStudents().then((students) => {
            angular.copy(students, this.students);
        });
    }
}

export default StudentListController;
