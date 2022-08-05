package org.wecancodeit.serverside.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Arrays;
import java.util.Collection;
import java.util.HashSet;
import java.util.Objects;

@Entity
public class User {

    @Id
    @GeneratedValue
    private Long id;
    private String username;
    private String password;
    @OneToMany (mappedBy = "user")
    @JsonIgnore
    private Collection<Journal> journals;

    // In order for controllers to properly sort data, the other models will need brought into this model and corresponding getters and
    // constructor additions. Hashcode and ToString is commented out below to prevent null data displays. That may need repeated in other
    // models as they get mapped together in order to enable proper displaying

    // Getters ======================================================
    public Long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public String getPassword() {
        return password;
    }

    public Collection<Journal> getJournals() {
        return journals;
    }

    // Constructors =================================================
    protected User() {
    }

    public User(String username, String password, Journal... journals) {
        this.username = username;
        this.password = password;
        this.journals = new HashSet<>(Arrays.asList(journals));
    }

    // Methods ======================================================
    public void addJournals(Journal journalsToAdd) {
        journals.add(journalsToAdd);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return Objects.equals(id, user.id) && Objects.equals(username, user.username) && Objects.equals(password, user.password);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, username, password);
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                '}';
    }
}
