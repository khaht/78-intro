import store from 'store';

export default {
  inserted(el: any, binding: any, vnode: any) {
    const { value } = binding;
    const roles = store.getters && store.getters['session/me'];

    const roleCd =
      roles && roles.usrRole && roles.usrRole.admRole && roles.usrRole.admRole
        ? roles.usrRole.admRole.roleCd
        : '';
    const usrPerms = roles.usrPerms ? roles.usrPerms : [];
    if (roleCd === 'SuperAdmin') {
      return true;
    }
    if (value && value instanceof Array && value.length > 0) {
      const permissionRoles = value;

      const hasPermission = usrPerms.some((role: any) => {
        return permissionRoles.includes(role);
      });

      if (!hasPermission) {
        permissionRoles.includes('disable')
          ? el.classList.add('disable-perm')
          : el.parentNode.removeChild(el);
      }
    } else {
      throw new Error(`need roles! Like v-permission="['admin','editor']"`);
    }
  },
};
