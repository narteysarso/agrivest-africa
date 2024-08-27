import { after, afterEach, describe, it, } from 'node:test';
import { UserInput } from '@/types';
import assert from 'assert';
import { IUserService } from '@/types/services/staff.service';

describe("user service", () => {

    let userPayload: UserInput = {
        firstname: "jane",
        lastname: "doe",
        password: "123456",
        email: "nn@mail.com"
    };

    let userService: IUserService;

    after(async () => {
        await userService.deleteAllUsers();
    })


    afterEach(async () => {
        await userService.deleteAllUsers();
    });




    describe("create user", () => {
        describe("given the input is valid", () => {
            it("should create a new user", async () => {
                const user = await userService.createUser(userPayload);

                assert.equal(user.password?.length, 60);
                assert.strictEqual(user.firstname, userPayload.firstname);
                assert.strictEqual(user.lastname, userPayload.lastname);
                assert.strictEqual(user.email, userPayload.email);
            })
        })
    });

    describe("login user", () => {
        describe("given the password is correct", () => {
            it("should return true", async () => {
                const user = await userService.createUser(userPayload);

                const isValid = await userService.loginUser({
                    email: user.email,
                    password: userPayload.password
                });

                assert.strictEqual(isValid, true);
            })
        });

        describe("given the password is wrong", () => {
            it("should return false", async () => {
                const user = await userService.createUser(userPayload);

                const isValid = await userService.loginUser({
                    email: user.email,
                    password: userPayload.password
                });

                assert.strictEqual(isValid, false);
            })
        })
    })

    describe("virtual property", () => {
        it("should return the user full name", async () => {
            await userService.createUser(userPayload);

            const user = await userService.findUser({ email: userPayload.email }, { lean: false });

            assert.strictEqual(user.fullname, `${userPayload.firstname} ${userPayload.lastname}`);
        })
    })
});
