const StudentApiService = (Restangular) => {
    'ngInject';

    const getStudents = () => {
        return Restangular.all('student').getList();
    };

    return {
        name: 'studentService',
        getStudents
    }
};


export default StudentApiService;
