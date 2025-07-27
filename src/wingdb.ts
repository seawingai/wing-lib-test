import { WingDb, JsonTable, FileTable } from '@seawingai/wingdb';

// Create a custom database class
class MyDatabase extends WingDb {
    get tables() {
        return {
            users: { ctor: JsonTable, file: 'users.json' },
            config: { ctor: FileTable, file: 'config' }
        };
    }
}

export async function main(): Promise<void> {
    // Initialize database
    const db = new MyDatabase('./data');

    // Load all tables
    await db.load();

    const id = Date.now().toString();

    const user = {
        "id": id,
        "name": "John Doe",
        "email": "john.doe@example.com",
        "username": "johndoe",
        "age": 28,
        "role": "user",
        "createdAt": "2024-01-15T10:30:00Z",
        "isActive": true
    };

    // Save user data
    await db.setItem('users', id, JSON.stringify(user));

    // Get user data
    const userData = await db.get('users');
    console.log(userData);
}

(async () => {
    await main();
})();
