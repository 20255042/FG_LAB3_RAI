type StudentProps = {
name: string;
course: string;
};
function Student({ name, course }: StudentProps) {
return <p>{name} - {course}</p>;
}
export default Student;