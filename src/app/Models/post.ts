export class posts {
    id: string = '';
    name: string = '';
    location: string = '';
    email: string = ''
    constructor(id: string, title: string, body: string, email: string) {
        (this.id = id), (this.name = title), (this.location = body), (this.email = email);
    }
}
